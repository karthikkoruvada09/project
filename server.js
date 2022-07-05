const express = require('express');
const bodyParser = require('body-parser');
const dotenv  = require('dotenv');
dotenv.config();


const dbConnection  = require('./src/helpers/db');

const port = process.env.SERVER_PORT;

const userRoutes = require('./src/routes/user');
const containerRoutes = require('./src/routes/container');



const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(function(req,res,next){
    console.log(req.body);
    next();
})



app.use('/user',userRoutes);
app.use('/container',containerRoutes);


app.listen(port,()=>{
    console.log("Server running on port",port);
})

module.exports = app;