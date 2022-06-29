const express = require('express')
const usersController = require('../controllers/usersController')
const passport = require("passport");
const methodOverride = require('method-override')

usersRouter = express.Router()

usersRouter.route('/').put(passport.authenticate('jwt', {session: false}),usersController.updateUser)
    .delete(passport.authenticate('jwt', {session: false}),usersController.removeUser) //put e delete per sviluppi futuri, per ora non le implementiamo nel frontend
usersRouter.route('/registration').post(usersController.createUser)
usersRouter.route('/login').post(usersController.authenticateUser)

usersRouter.get('/customer', passport.authenticate('jwt', {session: false}) ,(req, res) => {

    res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            email: req.user.email,
            role: req.user.role,
        }
    })
    //fai redirect a pagina di ordine utenti (si fa lato frontend con react router)
})
usersRouter.get('/admin', passport.authenticate('jwt', {session: false}), (req, res) => {

        res.status(200).send({
            success: true,
            user: {
                id: req.user._id,
                email: req.user.email,
                role: req.user.role
            }
        })

    }
)

module.exports = usersRouter