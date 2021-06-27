const mongoose=require('mongoose');
const dbname="meanGame";
const dbURL="mongodb://localhost:27017"+dbname;

mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true});

//to check if the connection is working or not 

mongoose.connection.on("connected",()=>{
    console.log(`mongoose connected ${dbURL}`);
});
mongoose.connection.on("disconnected",()=>{
    console.log(`mongoose disconnected`);
});
mongoose.connection.on("error",(err)=>{
    console.log(`mongoose error ${err}`);
});
process.on ("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect`);
        process.exit(0);
    });
});
process.on ("SIGTERM",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect`);
        process.exit(0);
    });
});
//important to use the nodemon
//terminate the current process and crerate a new one 
process.on ("SIGUSR2",()=>{
    mongoose.connection.close(()=>{
        console.log(`send disconnect`);
        process.kill(process.pid,"SIGUSR2");
    });
});

