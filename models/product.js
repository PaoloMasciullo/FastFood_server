const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        text: true
    },
    type: String,
    description: String,
    cost: Number,
});

module.exports = mongoose.model("Product", productSchema);