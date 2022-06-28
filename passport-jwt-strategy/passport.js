const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const User = require('../models/user');
const passport = require('passport');


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Secret string';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("received a authentication request")
    console.log(jwt_payload)

    User.findOne({id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false); //false significa che non abbiamo trovato l'utente, altrimenti avremmo ritornato l'utente
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });

}));