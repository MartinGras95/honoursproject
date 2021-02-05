// imports
import { addNewActivity } from '../controllers/activityControllers';

// variable to hold all routes
const routes = (app) => {
    app.routes('/activities')
    // POST endpoint
        .post(addNewActivity);
}

export default routes;