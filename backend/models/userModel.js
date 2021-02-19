// imports
import mongoose from 'mongoose';

// variable that will hold a mongoose schema
const Schema = mongoose.Schema;

// user schema
export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    programme: {
        type: String,
        required: true
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }
});

