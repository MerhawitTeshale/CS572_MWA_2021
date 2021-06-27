const MongoClient=require('mongodb').MongoClient;

const dbName="meanGames";

const dburl="mongodb://localhost:27017/"+dbName;

let _connection=null;

const open=()=>{
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