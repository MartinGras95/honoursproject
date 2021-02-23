// This file contain all routes relevant to users

// imports
import { addNewUser, getUsers, getUser,login } from '../controllers/userControllers';
import { addNewActivity, getActivities } from '../controllers/activityControllers';
import { addNewTask,getTasks,getTaskWithActivity } from '../controllers/taskControllers';
import { addNewFeedbackRequest, getFeedbackRequests } from '../controllers/feedbackRequestControllers'



// variable to hold all routes
const routes = (app) => {
// User routes
    app.route('/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);

// Activity routes
    app.route('/activities')
    // GET endpoint
        .get(getActivities)
    // POST endpoint
        .post(addNewActivity);
    
// Task routes
    app.route('/tasks')
    // GET endpoint
        .get(getTasks)
    // POST endpoint
        .post(addNewTask);
    
    app.route('/tasks/:activity')
        .get(getTaskWithActivity)

// get user route
    app.route('/user/:isStaff')
        .get(getUser)

// Feedback request routes
    app.route('/feedbackRequest')
        .get(getFeedbackRequests)
        .post(addNewFeedbackRequest)




}





export default routes;