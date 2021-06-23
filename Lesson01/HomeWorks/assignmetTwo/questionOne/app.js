const express=require('express');
const app=express();


app.set('port',5050)
const server=app.listen(app.get('port'),()=>{
    console.log(`Listening on port ${server.address().port}...`);
});
