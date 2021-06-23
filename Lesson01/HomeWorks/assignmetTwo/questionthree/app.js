const express=require('express');
const path=require('path');
const router=require('./api/routes');

const app= express();

app.set('port', 3000);

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});
app.use('/api',router);
const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
});