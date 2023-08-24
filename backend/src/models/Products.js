const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  products_id: Number,
  name: String,
  price: Number,
});

module.exports = mongoose.model('Products', productSchema);
