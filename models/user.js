//creare modello utenti
const mongoose = require('mongoose') //import del package necessario alla gestione del DB
const passport = require('passport')
const passport-local-mongoose = require('')

const userSchema= mongoose.Schema({
        name: String,
        surname: String,
        cellular: Number,
        email: {
            type: String,
            unique: true
        },
        role: {
            type: String,
            enum: {
                values: ['customer', 'admin', 'cook'] //cook messo solo per sviluppi futuri
            }
        }
    }

)
//aggiungere plugin local mongoose per creare in automatico i campi password ecc