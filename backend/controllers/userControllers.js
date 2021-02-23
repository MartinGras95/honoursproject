// This file contains functions interracting with the DB responsible for controlling user actions
// flow: request from route > controller executes function in DB

// imports
import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

// Create a User from the imported model 
const User = mongoose.model('User', UserSchema);

// Function to add new user to the DB
export const addNewUser = (req,res) => {
    let newUser = new User(req.body);

    // save user to db
    newUser.save((err,User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
}

// Function to get all users from db
export const getUsers = (req,res) => {
    // find all users in db
    User.find({},(err,User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
}

// Function to find user
export const getUser =(req, res) => {
    User.find({isStaff: req.params.isStaff}, (err, User)=> {
        if(err) throw err;
        res.json(User);  
    });
}





