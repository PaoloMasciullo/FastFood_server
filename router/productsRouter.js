const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.post('/', productsController.createProduct);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.put('/:id', productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);


module.exports = productsRouter;
