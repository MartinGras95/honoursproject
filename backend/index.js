// imports
import express from 'express';

// create webserver with express
const app = express();

// port
const PORT = 3000;

// Routes
app.get('/', (req,res) => {
    res.send(`Server is running on ${PORT}`)
});

// Listen for connection and return the application
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})