const express=require('express');
const path=require('path');
const app= express();

app.set('port', 3000);

// serving a static page
// app.get("/file",(req,res)=>{
//     console.log("file requested");
//     res.status(200).sendFile(path.join(__dirname,'public', 'index.html'));
// });
// the above code can be replaced by this line of code
app.use(express.static(path.join(__dirname,'public')));
const server=app.listen(app.get('port'),()=>{
    console.log(`listing on port ${server.address().port}`);
})