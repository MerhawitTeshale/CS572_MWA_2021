const mongoose=require('mongoose');
require('./cars-model');
const dbName="meanCarCatalog";
const dbURL="mongodb://localhost:27017/"+dbName;

mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on('connected',function(){
    console.log(`MongoDB connection created on ${dbURL}`);
});
mongoose.connection.on('disconnected',function(){
    console.log(`MongoDB disconnected`);
});
mongoose.connection.on('error',function(err){
    console.log(`MongoDB error occured ${err}`);
});

//disconnect
process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log(`forced to close the MongoDB connection`);
        process.exit(0);
    });
});
//Termination
process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        console.log(`SIGTERM forced to close the MongoDB connection`);
        process.exit(0);
    });
});
//restart
process.on("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log(`SIGTERM forced to close the MongoDB connection`);
        process.kill(process.pid,"SIGUSR2");
    });
});