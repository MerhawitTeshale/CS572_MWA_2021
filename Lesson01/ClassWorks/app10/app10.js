const express=require('express');
const app=express();

app.set('port',3000)
const server=app.listen(app.get('port'),function(){
    const port=server.address().port;
    console.log(`listing at ${app.get('port')}`);
});
