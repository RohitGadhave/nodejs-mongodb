const express = require('express');//import express
require('dotenv').config();//import dotenv


//import mogodb connection
require('./app/Configs/mongodb');

//initilize the express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import all routes
require('./app/Routes/index.rout')(app);



//listen to port

app.listen(process.env.PORT || 3000,()=>{
    console.log("listen express",process.env.PORT || 3000);
});