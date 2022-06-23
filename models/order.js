const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productList:[
        {
            type : mongoose.Types.ObjectId,
            ref : 'Product'
        }
    ],
    date : Date,
    user :{
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }

})
module.exports = mongoose.model("Order", orderSchema);
