const express=require('express');
const path=require('path');
const app= express();

app.set('port', 3000);

app.get("/",(req,res)=>{
    console.log("GET recieved!");
    res.send('this is fun');
});
app.get("/json",(req,res)=>{
    console.log("JSON request recieved!");
    res.status(200).json({"sucess":true})
});
app.get("/file",(req,res)=>{
    console.log("file requested");
    res.status(200).sendFile(path.join(__dirname,'app11.js'));
});
const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
})