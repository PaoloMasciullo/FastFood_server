const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./router/index');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);
app.use('/', (req, res) => res.status(404).json({error: "Risorsa non trovata"}));

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Connected database!");
        app.listen(process.env.PORT, () => console.log("Listening application on port ", process.env.PORT));
    });