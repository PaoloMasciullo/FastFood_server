const express = require('express');
const ordersController = require('../controllers/ordersController')

const ordersRouter = express.Router();

ordersRouter.post('/', ordersController.addOrder);
ordersRouter.get('/', ordersController.getOrders);
ordersRouter.get('/:id', ordersController.getOrderById);

module.exports = ordersRouter;
