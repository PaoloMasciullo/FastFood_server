const express = require('express');
const ordersController = require('../controllers/ordersController')
const productsController = require('../controllers/productsController')

const ordersRouter = express.Router();

ordersRouter.post('/', ordersController.addOrder);

module.exports = ordersRouter;
