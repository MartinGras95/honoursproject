// imports
import mongoose from 'mongoose';

// variable that will hold a mongoose schema
const Schema = mongoose.Schema;

export const taskSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
    },
    type: {
        type: Number,
        enum: [1,2,3],
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    sourceCode: {
        type: String,
        required: true
    }
});