const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer_id: String,
    preference: String,
    date: String,
});

module.exports = mongoose.model('Order', OrderSchema);
