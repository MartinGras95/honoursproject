// imports
import mongoose from 'mongoose';

// variable that will hold a mongoose schema
const Schema = mongoose.Schema;

export const activitySchema = new Schema({
    module: {
        type: String,
        required: true
    },
    lesson: {
        type: Number,
        required: true
    }
});