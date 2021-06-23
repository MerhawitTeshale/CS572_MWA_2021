const express =require('express');
const path=require('path');
const app=express();


app.set('port',5050);

app.use(express.static(path.join(__dirname,'public')));


const server =app.listen(app.get('port'),()=>{
    console.log(`serever is listening on port ${server.address().port}`);
});