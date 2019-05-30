const express = require("express"); //Route and app handler
const bodyParser = require("body-parser"); //Parse requested data from body
const mongoose = require("mongoose"); // Connect to MongoDB database
const morgan = require("morgan"); // Log HTTP transfers
const bcrypt = require("bcrypt"); //Hash and Salt passwords
const session = require("express-session"); //Handle logged in sessions
const MongoStore = require("connect-mongo")(session); //Used to store sessions in Mongo db
const helmet = require("helmet"); //Security plugin
const key = require("./config/keys.js"); //Store and import all keys from here


// Start mongoDB "D:\Projects\MDB\bin\mongod.exe"
// .\mongod.exe

//Connect to mongodb
mongoose.connect("mongodb://localhost/biblio",  { useNewUrlParser: true, useCreateIndex: true });
let db = mongoose.connection;

//Make express app
const app = express();

//Helmet is a security package
app.use(helmet());

//Use Morgan to log HTTP transfers
app.use(morgan("dev"));

//Use bodyparser to get POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Add session settings
app.use(session({
  secret: key.session,
  name: "sessionId", //Use non-standard cookie names, this is similar to hiding X-Powered-By
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: db})
}));


//Show static folder
app.use(express.static("./public"));

// routes
require('./routes')(app); 

/*
// to avoid 304
app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString()); 
});
function force200Responses(req, res, next) { req.headers['if-none-match'] = 'no-match-for-this'; next(); }

app.use(force200Responses)
*/
//Create server
app.listen(8000);
console.log("Now listening to port 8000");



