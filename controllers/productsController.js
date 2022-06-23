const Product = require('../models/product');

module.exports = {
    getProducts: (req, res) => {
        const query = {};
        if (req.query.name) query.$text = {$search: req.query.name}; //query testuale sul nome del prodotto
        if (req.query.type) query.type = req.query.type; //query di tutti i prodotti di un certo tipo
        Product.find(query).then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },
    getProductById: (req, res) => {
        Product.findById(req.params.id)
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
    },
    deleteProduct: (req, res) => {
        try {
            Product.findByIdAndRemove(req.params.id)
                .then(data => {
                    if (!data) {
                        res.status(404).send({
                            message: `Prodotto non trovato, eliminazione fallita!`
                        });
                    } else {
                        res.send({
                            message: "Il prodotto è stato eliminato correttamente!"
                        });
                    }
                });
        } catch (e) {
            res.status(500).json({error: e});
        }

    },
    updateProduct: (req, res) => {
        try {
            Product.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
                .then(data => {
                    if (!data) {
                        res.status(404).send({
                            message: "Prodotto non trovato, aggiornamento fallito!"
                        });
                    } else res.send({message: "Il prodotto è stato aggiornato correttamente!"});
                });
        } catch (e) {
            res.status(500).json({error: e});
        }
    }
}