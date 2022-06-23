const moongose = require('mongoose');

const orderSchema = moongose.Schema({
    productList:[
        {
            type : mongoose.Types.ObjectId,
            ref : 'Product'
        }
    ],
    data : Date,
    user :{
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }

})
module.exports = mongoose.model("Order", orderSchema);
