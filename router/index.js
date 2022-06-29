const express = require('express');
const ordersRouter = require('./ordersRouter'),
    productsRouter = require('./productsRouter'),
    usersRouter = require('./usersRouter'),
    methodOverride = require('method-override');
const passport = require("passport");

const router = express.Router();
router.use(methodOverride("_method",{
    methods: ["POST","GET"]
})); //serve per gestire eventuali richieste di put e delete

router.use('/api/orders',passport.authenticate('jwt', {session: false}, ordersRouter));
router.use('/api/products',passport.authenticate('jwt', {session: false}, productsRouter));
router.use('/api/users',usersRouter);


module.exports = router;