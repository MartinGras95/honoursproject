import { UserSchema } from './models/userModel';
const localStrategy = require('passport-local').Strategy;
import mongoose from 'mongoose';

// Create a User from the imported model 
const User = mongoose.model('User', UserSchema);

// local strategy which searches for the user by checking the isStaff variable
// if successful then return the found user
module.exports = function(passport) {
    passport.use(
        new localStrategy((isStaff, done) => {
            User.findOne({isStaff: isStaff}, (err,user) => {
                if(err) throw err;
                if(!user) return done(null, false);
                return done(null, user)
            })
        })
    );

    // Serialize
    passport.serializeUser((user,cb) => {
        cb(null,user.id);
    })
    // deserialize
    passport.deserializeUser((id,cb) => {
        User.findOne({_id:id}, (err,user) => {
            cb(err,user)
        })
    })
}