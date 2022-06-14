const  Product = require('../models/product');

module.exports = {
    getProducts: (req, res) => {
        const query = {};
        if (req.query.name) query.$text = {$search: req.query.name}; //query testuale sul nome del prodotto
        if (req.query.type) query.type = req.query.type; //query di tutti i prodotti di un certo tipo
        Product.find(query).then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },

    getProductsById: (req, res) => {
        Product.findById(req.param.id)
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },
    createProduct: (req, res) => {
        Product.create({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            cost: req.body.cost,
        }).then(() => res.json({message: 'Nuovo prodotto creato!'}));
    }
}