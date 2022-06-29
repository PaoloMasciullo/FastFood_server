const express = require('express');
const productsController = require('../controllers/productsController');
const passport = require("passport");

const productsRouter = express.Router();

productsRouter.route('/')
    .get(passport.authenticate("jwt", {session: false}), productsController.getProducts)
    .post(passport.authenticate("jwt", {session: false}), productsController.createProduct);

productsRouter.route('/:id')
    .get(passport.authenticate("jwt", {session: false}), productsController.getProductById)
    .put(passport.authenticate("jwt", {session: false}), productsController.updateProduct)
    .delete(passport.authenticate("jwt", {session: false}), productsController.deleteProduct);

module.exports = productsRouter;
