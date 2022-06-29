const express = require('express');
const ordersRouter = require('./ordersRouter'),
    productsRouter = require('./productsRouter'),
    usersRouter = require('./usersRouter')
const passport = require("passport");

const router = express.Router();

/*router.use('/api/orders', passport.authenticate('jwt', {session: false}, ordersRouter));
router.use('/api/products', passport.authenticate('jwt', {session: false}, productsRouter));*/
router.use('/api/orders', ordersRouter);
router.use('/api/products', productsRouter);
router.use('/api/users', usersRouter);


module.exports = router;