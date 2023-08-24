const mongoose = require('mongoose');

const CustomerPreferenceSchema = new mongoose.Schema({
    preference_id: String,
    product_id: Number,
});

module.exports = mongoose.model('CustomerPreference', CustomerPreferenceSchema);
