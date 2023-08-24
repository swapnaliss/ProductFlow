const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const CustomerPreference = require('../models/CustomerPreference');
const Order = require('../models/Order');

router.get('/data', async (req, res) => {
    try {
        const products = await Products.find();
        console.log(products);
        res.json(products);
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
