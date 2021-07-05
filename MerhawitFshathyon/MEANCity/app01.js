const express=require('express');
const path=require('path');
//database connedction
require('./api/data/db');
//require the route
const router=require('./api/route');



const app=express();
//set the port number
app.set('port',3000);

//middleware
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));    
//use router
app.use('/api', router);
app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));
const server=app.listen(app.get('port'), ()=>{
    console.log(`server is connected on port ${server.address().port}`);
});