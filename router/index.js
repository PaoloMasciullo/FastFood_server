const express = require('express');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');

const router = express.Router();
router.use('/api/orders', ordersRouter);
router.use('/api/products', productsRouter);

module.exports = router;