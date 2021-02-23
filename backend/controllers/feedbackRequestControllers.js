// import
import mongoose from 'mongoose';
import { feedbackRequestSchema } from '../models/feedbackRequestModel';

// create a feedback request from the imported model
const FeedbackRequest = mongoose.model('feedbackRequest', feedbackRequestSchema);

// function to create a feedback request
export const addNewFeedbackRequest = (req,res) => {
    // get data from body
    let newFeedbackRequest = new FeedbackRequest(req.body);

    // save request to db
    newFeedbackRequest.save((err, FeedbackRequest) => {
        if(err){
            res.send(err)
        }
        res.json(FeedbackRequest);
    });
}

// Function to retrieve all feedback requests
export const getFeedbackRequests = (req,res) => {
    FeedbackRequest.find({},(err,FeedbackRequest) => {
        if(err){
            res.send(err)
        }
        res.json(FeedbackRequest);
    });
}