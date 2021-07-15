const express=require('express');
const path=require('path');

//make sure you require the database before the routes 
require('./api/data/db');
const router=require('./api/routes');
require('dotenv').config();

const app= express();

//console.log(`here is the prot ${process.env.PORT}`);
app.set('port', process.env.PORT);

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    //preventing our backend from accessing the files in public directory angular-app
    const urlMatch=req.url.match(/angular-app/);
    if(urlMatch){
        return res.status(403).json({message:'403 forbidden'});
    }
    next();
});

app.use("/node_modules",express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

//another middleware-- for it to share the resource with 4200 angular app
app.use("/api",function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Header","Origin, X-Requeted-with, Content-Type Access");
    next();
});
app.use('/api',router);


const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
});