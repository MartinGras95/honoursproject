// imports
import mongoose from 'mongoose';

// variable that will hold a mongoose schema
const Schema = mongoose.Schema;

export const feedbackRequestSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    senderID:{
        type:String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    msg: {
        type: String,
    },
    sourceCode: {
        type: String,
    }

});