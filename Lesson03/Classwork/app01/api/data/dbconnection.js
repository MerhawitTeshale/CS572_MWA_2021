const MongoClient=require('mongodb').MongoClient;

const dbName="meanGames";

const dburl="mongodb://localhost:27017/"+dbName;

let _connection=null;

const open=()=>{
    //this means give me ok for insert when written to primary and read from secondary 
    // const client =new MongoClient(
    //     "mongodb://localhost:30010, mongodb://localhost:30020, mongodb://localhost:30030, mongodb://localhost:30000/meanGmaes?w=1&ReadPreference=secondary");
    MongoClient.connect(dburl,{useUnifiedTopology: true},(err,client)=>{
        if (err){
            console.log(`connection failed ${err}`);
            return;
        }
        _connection=client.db(dbName);
        console.log(`connection open ${_connection}`);
    });
}

let get=()=>{
    return _connection;
}

module.exports={
    open:open,
    get:get
}