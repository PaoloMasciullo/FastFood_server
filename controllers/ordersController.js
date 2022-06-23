const mongoose = require('mongoose');
const Product = require('../models/product');
const Order = require('../models/order');

module.exports = {
    getOrders: (req, res) => {
        Order.find().then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },
    getOrderById: (req, res) => {
        Order.findById(req.params.id)
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },
    addOrder: (req, res) => {
            Order.create({
                        productList: mongoose.Types.ObjectId(req.body.products),
                        date: new Date(),
                        user: mongoose.Types.ObjectId(req.body.uId),
                    })
                .then(() => res.json({message: 'Ordine effettuato!'}));
        }
}