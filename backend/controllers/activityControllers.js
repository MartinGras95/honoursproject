// imports 
import mongoose from 'mongoose';
import { activitySchema } from '../models/activityModel';

// create an activity from the imported model
const Activity = mongoose.model('Activity', activitySchema);

// function to create new activity
export const addNewActivity = (req,res) => {
    // Get data from body
    let newActivity = new Activity(req.body);

    // save activity to DB
    newActivity.save((err,Activity) => {
        if(err){
            res.send(err)
        }
        res.json(Activity);
    });
}

// Fetch all activities
export const getActivities = (req,res) => {
    Activity.find({},(err,Activity) => {
        if(err){
            res.send(err)
        }
        res.json(Activity);
    });
}

// fetch specific activity description
export const getActivity = (req,res) => {
    Activity.findOne({name: req.params.currentActivity}, (err, Activity) => {
        if(err){
            res.send(err)
        }
        res.json(Activity)
    })
}