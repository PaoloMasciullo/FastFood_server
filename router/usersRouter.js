const express = require('express')
const usersController = require('../controllers/usersController')
const passport = require("passport");

usersRouter = express.Router()

usersRouter.route('/').put(passport.authenticate('jwt', {session: false},usersController.updateUser))
    .delete(passport.authenticate('jwt', {session: false},usersController.removeUser))
usersRouter.route('/registration').post(usersController.createUser)
usersRouter.route('/login').post(usersController.authenticateUser)




module.exports = usersRouter