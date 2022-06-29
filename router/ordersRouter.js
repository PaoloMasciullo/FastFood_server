const express = require('express');
const ordersController = require('../controllers/ordersController')
const passport = require('passport');

const ordersRouter = express.Router();

ordersRouter.route('/')
    .post(passport.authenticate("jwt", {session: false}), ordersController.addOrder)
    .get(passport.authenticate("jwt", {session: false}), ordersController.getOrders);

ordersRouter.route('/:id')
    .get(passport.authenticate("jwt", {session: false}), ordersController.getOrderById)
    .delete(passport.authenticate("jwt", {session: false}), ordersController.deleteOrder);

module.exports = ordersRouter;
