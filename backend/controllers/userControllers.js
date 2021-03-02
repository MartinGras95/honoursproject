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

// Function to find user by role 
export const getUser =(req, res) => {
    User.find({isStaff: req.params.isStaff}, (err, User)=> {
        if(err) throw err;
        res.json(User);  
    });
}


// Function to send email to user
export const sendMail = (req,res) => {
    // Find user and update
    User.findByIdAndUpdate(req.body.id,{$push:{inbox:req.body.message}}, (err) => {
        if(err){
            res.send(err);
        }
        res.send(`Message sent`)
    })
}

// Function to delete an email
// find user by the id of the logged user
// pull the email object according to the feedbackID
export const deleteMail = (req,res) => {
    User.findOneAndUpdate({_id: req.body.id},{ $pull: {inbox: { feedbackID: Number(req.body.fid)}}}, (err,data) => {
        if(err){
            console.log(err)
        }
        res.send(data)
    })
}












