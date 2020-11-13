//imports 
const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");

//routes
const users = require('./server/routes/user-routes');

const app = express();
const port = process.env.PORT||8080;

//using morgan and body-parser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization,access-control-allow-origin');
    if(req.method=='OPTIONS'){
        res.header('Access-Control-Allow-Methos','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//route connections
app.use('/users',users);

//server start
app.listen(port,()=>{
    console.log('Server started ' + port);
});
