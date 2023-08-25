const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const CustomerPreference = require('../models/CustomerPreference');
const Order = require('../models/Order');

router.get('/allData', async (req, res) => {
    try {
        const products = await Products.find();
        const customerPreferences = await CustomerPreference.find();
        const orders = await Order.find();

        res.json({
            products: products,
            customerPreferences: customerPreferences,
            orders: orders
        });
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/most-popular-product', async (req, res) => {
    try {
        const aggregationPipeline = [
            {
                $lookup: {
                    from: "customerpreferences",
                    localField: "preference",
                    foreignField: "preference_id",
                    as: "productPreferences"
                }
            },
            { $unwind: "$productPreferences" },
            {
                $group: {
                    _id: "$productPreferences.product_id",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ];

        const [mostPopularProductResult] = await Order.aggregate(aggregationPipeline);

        if (!mostPopularProductResult) {
            return res.json({ message: "No popular product found." });
        }

        const mostPopularProduct = await Products.findOne({ product_id: mostPopularProductResult._id });

        res.json(mostPopularProduct);

    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/customers-ordered-all-products', async (req, res) => {
    try {
        const totalProducts = await Products.countDocuments();

        const aggregationPipeline = [
            {
                $lookup: {
                    from: "customerpreferences",
                    localField: "preference",
                    foreignField: "preference_id",
                    as: "productPreferences"
                }
            },
            { $unwind: "$productPreferences" },
            {
                $group: {
                    _id: "$customer_id",
                    uniqueProductsOrdered: { $addToSet: "$productPreferences.product_id" }
                }
            },
            {
                $addFields: {
                    totalUniqueProductsOrdered: { $size: "$uniqueProductsOrdered" }
                }
            },
            {
                $match: { totalUniqueProductsOrdered: totalProducts }
            }
        ];

        const customersOrderedAllProducts = await Order.aggregate(aggregationPipeline);

        const customerIds = customersOrderedAllProducts.map(customer => customer._id);

        res.json(customerIds);

    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/customers-bought-inexpensive-items', async (req, res) => {
    try {
        const avgResult = await Products.aggregate([
            {
                $group: {
                    _id: null,
                    avgPrice: { $avg: "$price" }
                }
            }
        ]);
        console.log(avgResult);

        const averagePrice = avgResult[0].avgPrice;
        console.log(averagePrice);

        const aggregationPipeline = [
            {
                $lookup: {
                    from: "customerpreferences",
                    localField: "preference",
                    foreignField: "preference_id",
                    as: "productPreferences"
                }
            },
            { $unwind: "$productPreferences" },
            {
                $lookup: {
                    from: "products",
                    localField: "customerpreferences.product_id",
                    foreignField: "products_id",
                    as: "productDetails"
                }
            },
            { $unwind: "$productDetails" },
            {
                $match: {
                    "productDetails.price": { $lt: averagePrice }
                }
            },
            {
                $group: {
                    _id: "$customer_id"
                }
            }
        ];
        const customers = await Order.aggregate(aggregationPipeline);
        console.log(customers);
        
        const customerIds = customers.map(customer => customer._id);

        res.json(customerIds);

    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
