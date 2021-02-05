// imports
import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/Routes';

// create webserver with express
const app = express();
// port
const PORT = 4000;

// Database
// Mongo connection
mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect('mongodb+srv://martingras:titilayo@examplemerncluster.rnhwh.mongodb.net/codailyDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup - so requests can be transpild to what db can understand
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Making routes available to the application
routes(app);

// Routes
app.get('/', (req,res) => {
    res.send(`Server is running on ${PORT}`)
});

// Listen for connection and return the application
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})