//requiring express
const express = require('express');
//function for connecting to the database
const connectDb = require('/db');
//require env. Allows us to use environment variables 
require('dotenv').config();
//constructing an object variable
const {PORT} = process.env;
//connecting to the db
connectDb();

//initializing express
const app = express();

//using an express middlewire in this case json
app.use(express.json({extended: false}));

//creating a route
app.get('/', (req, res) => {
    res.json({
        message: "welcome to details list"
    });
})

//creating the port
const port = process.env.PORT || PORT;

//listening 
app.listen(port, () => console.log(`app running on port ${port}`));

