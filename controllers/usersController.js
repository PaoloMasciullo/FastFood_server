const User = require('../models/user')
const {hashSync, compareSync} = require('bcrypt') //ho bisogno di questa funzione per criptare la password
const jwt = require('jsonwebtoken')

module.exports = {
    createUser(req, res) {
        //qui effettuo la registrazione del nuovo user
        console.log('Register post request received'); //stringa solo per fini di debug
        const user = new User({
            name: req.body.name,
            surname: req.body.surname,
            cellular: req.body.cellular,
            email: req.body.email,
            password: hashSync(req.body.password, 10), //criptare la password prima di memorizzarla
            role: req.body.role //gestire con select da frontend
        })

        //necessario save per salvare lo stato del db e quindi l'avvenuto inserimento

        user.save().then(user => {
            res.send({
                success: true,
                message: 'User created successfully.',
                user: {
                    id: user._id, //id assegnato in automatico da mongodb
                    name: user.name,
                    surname: user.surname,
                    role: user.role
                }
            })
        }).catch(err => {
            res.send({
                success: false,
                message: 'Something went wrong.',
                error: err
            })
        })
    }
    ,
    updateUser(req, res) {
        //può essere invocato solo dall'utente stesso attualmente loggato
        console.log("received an update request") //stringa per il debug
        const id = req.body.id; //da frontend gestire pre compilazione del form di aggiornamento
        User.findByIdAndUpdate(id,{name : req.body.name, surname : req.body.surname, email:req.body.email, cellular:req.body.cellular
        },
            function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                }
            })
        //vedere se serve fare il save o se non è necessario con findByIdAndUpdate

    },
    removeUser(req, res) {
        //può essere invocato solo dall'utente stesso attualmente loggato
        console.log("received a delete request") //stringa per il debug
        User.deleteOne({email : req.body.email}).then(user => {
            //if no user found
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: "Could not find the user."
                })
            }
            return res.status(200).send({
                success: true,
                message: "User removed successfully"
            })
        })
    },
    authenticateUser(req, res) {
        //qui quando l'utente vuole fare il login
        console.log('Login post request') //stringhe di debug
        User.findOne({email: req.body.email}).then(user => {
            //if no user found
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: "Could not find the user."
                })
            }
            //incorrect password
            if (!compareSync(req.body.password, user.password)) {
                return res.status(401).send({
                    success: false,
                    message: "Incorrect password"
                })
            }
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role //ipotesi che serva per gestire l'autenticazione per ruolo
            }

            const token = jwt.sign(payload, "Secret string", {expiresIn: "1h"})

            return res.status(200).send({
                success: true,
                message: "Logged in successfully",
                token: "Bearer " + token,
                role : payload.role,
                id: payload.id
            })
        })
    }
}