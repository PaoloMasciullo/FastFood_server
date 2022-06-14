const express = require('express');
const ordersRouter = require('./ordersRouter'),
    productsRouter = require('./productsRouter');

const router = express.Router();
router.use('/api/orders', ordersRouter);
router.use('/api/products', productsRouter);

module.exports = router;