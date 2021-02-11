// imports
import mongoose from 'mongoose';

// variable that will hold a mongoose schema
const Schema = mongoose.Schema;

export const activitySchema = new Schema({
    module: {
        type: String,
        required: true
    },
    activityNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});