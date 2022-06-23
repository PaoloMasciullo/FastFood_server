const mongoose = require('mongoose');
const Product = require('../models/product');
const Order = require('../models/order');

module.exports = {
    addOrder: (req, res) => {
        try {
            Order.create({
                        productList: req.body.products,
                        date: new Date(),
                        user: mongoose.Types.ObjectId(req.body.userId),
                    })
                .then(() => res.json({message: 'Ordine effettuato!'}));
        } catch(e) {
            res.status(500).json({error: e});
        }
    }
}