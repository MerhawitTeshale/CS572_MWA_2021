const mongoose=require('mongoose');
//require the model here
require('./games-model');
const dbName="meanGames";
const dburl="mongodb://localhost:27017/"+dbName;

mongoose.connect(dburl,{useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on('connected',function(){
    console.log(`MongoDB connection created on ${dburl}`);
});

// mongoose.connection.on('disconnected',function(){
//     console.log(`MongoDB disconnected`);
// });

mongoose.connection.on('error',function(err){
    console.log(`Could not connect to MongoDB ${err}`);
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