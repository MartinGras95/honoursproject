// This file contain all routes relevant to users

// imports
import { addNewUser, getUsers } from '../controllers/userControllers';

// variable to hold all routes
const routes = (app) => {
    app.route('/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);
}

export default routes;