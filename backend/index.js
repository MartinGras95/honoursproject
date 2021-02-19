// imports
import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/Routes';
import cors from 'cors';
// const session = require("express-session");
// const passport = require("passport");
// const passportLocal = require("passport-local");
// const cookieParser = require("cookie-parser");


// ============================= END OF IMPORTS ====================================


// create webserver with express
const app = express();
// port
const PORT = 4000;


// ============================ START OF MIDDLEWARE ================================


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

// CORS setup
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

// Session
// app.use(
//     session({
//         secret: "secretcode",
//         resave: true,
//         saveUninitialized: true
//     })
// )

// app.use(cookieParser("secretcode"))
// app.use(passport.initialize());
// app.use(passport.session());
// require("./passport-config")(passport);




// ============================= Passport stuff ===================================

// something not working here comes back as user not found
// not finding user ?? works without the passport-config file and return correct user

// app.post("/user", (req,res,next) =>{
//     console.log("in user route")
//     passport.authenticate("local",(err,user,info)=> {
//         if(err) throw err;
//         if(!user) res.send("no user found")
//         else{
//             req.login(user, err => {
//                 if(err) throw err;
//                 res.send("success");
//                 console.log(req.user);
//             })
//         }
//     })(req,res,next);
// })

// Cookie validation middleware
// function validateCookie(req,res,next) {
//     const { cookies } = req;
//     if('session_id' in cookies){
//         if(cookies.session_id === '123456'){
//             next();
//         }else{
//             res.status(403).send({msg: 'No Auth'})
//         }
//     }else{
//         res.status(403).send({msg: 'No Auth'})
//     }
// }

// // Create a cookie when user signs in
// app.get("/signin", (req,res) => {
//     res.cookie('session_id', '123456');
//     res.status(200).json({msg: 'Logged in'});
// })

// // Protected route example that call cookie validation middleware respons with authorised if cookie is correct
// app.get('/protected', validateCookie, (req,res) => {
//     res.status(200).json({msg: 'You are authorised'});
// })



// ============================ END OF MIDDLEWARE ====================================


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