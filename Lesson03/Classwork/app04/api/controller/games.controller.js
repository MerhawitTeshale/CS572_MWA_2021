const { query } = require('express');
const dbconnection=require("../data/dbconnection");
const ObjectId=require("mongodb").ObjectID;
const mongoose=require('mongoose');
const Game=mongoose.model("Game");


module.exports.gamesGetAll=(req,res)=>{
    console.log(`this is the Json route`);
    console.log(`${req.query}`);
    let offset=0;
    let count=5;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        offset=parseInt(req.query.count);
    }
    console.log(`offset ${offset} count ${count}`);
    
//     const db=dbconnection.get();
//    const collection=db.collection("games");
//     const docs=collection.find().skip(offset).limit(count).toArray((err,docs)=>{
//         res.status(200).json(docs);
//     });
//collection names are in schema now they are no longer provided here -- separation of concern
    Game.find().exec((err,games)=>{
        console.log(`found games ${games.length}`);
        res.status(200).json(games);
    });
};
module.exports.gamesGetOne=(req,res)=>{
    const gameId=req.params.gameId;
    console.log(gameId);
    // const db=dbconnection.get();
    // const collection=db.collection("games");
    // collection.findOne({_id:ObjectId(gameId)},(err,docs)=>{
    //     console.log(`found the game ${req.params.gameId}`);
    //     res.status(200).json(docs); });
   
    Game.findById(gameId).exec(function(err, games) {
        
        console.log(`am i even here?`);
        if (err){
            console.log(`here is the error ${err}`);
        }
        res.status(200).json(games);
        });
   
};
module.exports.gamesAddOne=(req,res)=>{
    console.log(`POST request coming`);
    console.log(req.body);
    // const db=dbconnection.get();
    // const collection=db.collection("games");
    // let newGame={};
    // if(req.body&& req.body.title && req.body.price){
    //     console.log(req.body);
    //     newGame.title=req.body.title;
    //     newGame.price=parseFloat(req.body.price);
    //     collection.insertOne(newGame,(err,response)=>{
    //         console.log(`game saved ${response}`);
    //         res.status(201).json(req.body);
    //     });
    // } else{
    //     console.log(`data missing from POST `)
    //     res.status(400).json({error:"requiresd fields"});
    // }
   
}