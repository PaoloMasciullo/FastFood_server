const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productList:[],
    date : { type: Date, default: Date.now },
    user :{
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    total: Number,

})
module.exports = mongoose.model("Order", orderSchema);
