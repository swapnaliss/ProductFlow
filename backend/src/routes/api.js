const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const CustomerPreference = require('../models/CustomerPreference');
const Order = require('../models/Order');

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

router.get('/customerPreference', async (req, res) => {
    try {
        const customerPreference = await CustomerPreference.find();
        console.log(customerPreference);
        res.json(customerPreference);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/order', async (req, res) => {
    try {
        const order = await Order.find();
        console.log(order);
        res.json(order);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
