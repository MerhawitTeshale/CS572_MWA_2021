const express=require('express');
require('./api/data/db_con');
const router=require('./api/routes');
const app=express();

app.set('port',3000);

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});


app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use('/api',router);
const server=app.listen(app.get('port'),function(){
    console.log(`server lisitng on port ${server.address().port}`);
});