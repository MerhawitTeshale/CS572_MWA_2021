const express=require('express');
const path=require('path');
//make sure you require the database before the routes 
require('./api/data/db');
const router=require('./api/routes');

const app= express();

app.set('port', 3000);

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});

app.use("/node_modules",express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use('/api',router);
const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
});