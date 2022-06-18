const express = require('express')
const usersController = require('../controllers/usersController')

usersRouter=express.Router()

usersRouter.route('/users').put(usersController.updateUser).delete(usersController.removeUser)
usersRouter.route('/users/registration').post(usersController.createUser)
usersRouter.route('/users/login').post(usersController.authenticateUser)




module.exports = usersRouter