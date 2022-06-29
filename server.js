const express = require('express'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    cors = require('cors'),
    passport = require('passport');

const router = require('./router/index');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true})); //messo a true per tutorial autenticazione, poi vediamo se rimettere a false o no
app.use(express.json());
app.use(passport.initialize());

require('./passport-jwt-strategy/passport')
app.use(router);
app.use('/', (req, res) => res.status(404).json({error: "Risorsa non trovata"}));
//le protected routes saranno /order (accessibile da utenti) e /menu accessibile solo da admin


mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Connected database!");
        app.listen(process.env.PORT, () => console.log("Listening application on port ", process.env.PORT));
    });