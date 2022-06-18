const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = {
    createUser(req,res){
        //qui effettuo la registrazione del user
    },
    updateUser(req,res){
        //può essere invocato solo dall'utente stesso attualmente loggato
    },
    removeUser(req,res){
    //può essere invocato solo dall'utente stesso attualmente loggato
    },
    authenticateUser(req,res){
       //qui quando l'utente vuole fare il login
    }
}