// import
import mongoose from 'mongoose';
import { taskSchema } from '../models/taskModel';

// create a task from the imported model
const Task = mongoose.model('Task', taskSchema);

// function to add new task
export const addNewTask = (req,res) => {
    // get data from body
    let newTask = new Task(req.body);

    // save task to db
    newTask.save((err, Task) => {
        if(err){
            res.send(err)
        }
        res.json(Task);
    });
}

// Fetch all tasks
export const getTasks = (req,res) => {
    Task.find({},(err,Activity) => {
        if(err){
            res.send(err)
        }
        res.json(Task);
    });
}