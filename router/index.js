const express = require('express');
const ordersRouter = require('./ordersRouter'),
    productsRouter = require('./productsRouter'),
    usersRouter = require('./usersRouter'),
    methodOverride = require('method-override');
const passport = require("passport");

const router = express.Router();
router.use(methodOverride("_method",{
    methods: ["POST","GET"]
}));
router.use('/api/orders',passport.authenticate('jwt', {session: false}, ordersRouter));
router.use('/api/products',passport.authenticate('jwt', {session: false}, productsRouter));
router.use('/api/users',usersRouter);

router.get('//api/users/customer', passport.authenticate('jwt', {session: false}, (req, res) => {

    res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            email: req.user.email,
            role: req.user.role
        }
    })
    //fai redirect a pagina di ordine utenti
}))
router.get('/api/users/admin', passport.authenticate('jwt', {session: false}, (req, res) => {
        if (!req.token.payload.role === 'admin') {
            res.status(401).send({
                success: false,
                message: "Customers are not able to modify menu, if you have admin account, please use that one."
            })
        }
        res.status(200).send({
            success: true,
            user: {
                id: req.user._id,
                email: req.user.email,
                role: req.user.role
            }
        })

    }
))

module.exports = router;