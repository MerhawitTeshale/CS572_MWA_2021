const express=require('express');
const path=require('path');
const routes=require('./routes');

const app= express();

app.set('port', 3000);

//middleware
//this is called subrouting
//app.use('/css',(req,res,next)=>{
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    //this means process the next middleware 
    next();
});
app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);
const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
})