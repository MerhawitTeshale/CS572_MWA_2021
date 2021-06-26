const express=require('express');
const path=require('path');
require('./api/data/database_connection');
const router=require('./api/routes');
const app=express();

app.set('port',3000);

app.use('/api',router);
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
const serever=app.listen(app.get('port'),function() {
    console.log(`server listening on port ${serever.address().port}`);
});