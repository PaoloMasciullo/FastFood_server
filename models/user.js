//creare modello utenti
const mongoose = require('mongoose') //import del package necessario alla gestione del DB
const passport = require('passport')

//mongoose.connect('mongodb ecc passport-jwt)
const userSchema= mongoose.Schema({
        name: String,
        surname: String,
        cellular: Number,
        email: {
            type: String,
            unique: true
        },
        password:String,
        role: {
            type: String,
            enum: {
                values: ['customer', 'admin', 'cook'] //cook messo solo per sviluppi futuri
            }
        }
    }

)
const User = mongoose.model('User', userSchema);

module.exports = User;