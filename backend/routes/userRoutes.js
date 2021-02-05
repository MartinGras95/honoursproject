// This file contain all routes relevant to users

// imports
import { addNewUser, getUsers } from '../controllers/userControllers';
import { addNewActivity, getActivities } from '../controllers/activityControllers';


// variable to hold all routes
const routes = (app) => {
    app.route('/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);
    
    app.route('/activities')
    // GET endpoint
        .get(getActivities)
    // POST endpoint
        .post(addNewActivity);
    
}

export default routes;