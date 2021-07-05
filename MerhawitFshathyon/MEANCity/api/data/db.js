//import mongoose
const mongoose=require('mongoose');

//require the model
require("./city-model");


const dbName="meanCities";
const dbURL="mongodb://localhost:27017/"+dbName;
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true});


mongoose.connection.on('connected',()=>{
    console.log(`data base is connected ..${dbURL}`)
});
mongoose.connection.on("disconnected",()=>{
    console.log(`mongoose disconnected 1`);
});
mongoose.connection.on("error",(err)=>{
    console.log(`mongoose error ${err}`);
});
process.on ("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect from SIGINT`);
        process.exit(0);
    });
});
process.on ("SIGTERM",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect from SIGTERM`);
        process.exit(0);
    });
});
//important to use the nodemon
process.on ("SIGUSR2",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect SIGUSR2`);
        process.kill(process.pid,"SIGUSR2");
    });
});

