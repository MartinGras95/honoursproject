// This file contain all routes relevant to users

// imports
import { addNewUser, getUsers } from '../controllers/userControllers';
import { addNewActivity, getActivities } from '../controllers/activityControllers';
import { addNewTask } from '../controllers/taskControllers';


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
    // POST endpoint
        .post(addNewTask);
}

export default routes;