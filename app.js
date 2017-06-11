
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.database); 
const cors= require("cors");
const users = require('./routes/users');
const app = express();  
const port = 3000;

//console.log("config store : ",config);
//console.log("express app: ",app);
//console.log("path: ",path);
//console.log("bodyparser: ",bodyparser);

//passport Middleware 
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(cors());

//body parser middlewear
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/users',users);
app.get("/",(req,res)=>{
 
        res.send('Envalid EndPoint');
});

app.listen(port,()=>{
  
     console.log("server started on port "+port)
 
});

//Database Connection
mongoose.connection.on('connected',()=>{

 console.log("connected to mongo db"+config.database);

});

//Database Connection
mongoose.connection.on('error',(err)=>{ 

 console.log("connected error to  mongo db"+err);

});
