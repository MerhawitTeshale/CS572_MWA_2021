const { query } = require('express');
const mongoose = require('mongoose');
const Game = mongoose.model("Game");

const runGeoQuery = function (req, res) {
    const lng = parseFloat(req.query.lng)
    const lat = parseFloat(req.query.lat)
    console.log(`lat ${lat} and lng ${lng}`);
    const query = {
        "publisher.location": {
            $near: {
                $geometry: {
                    type: 'point',
                    coordinates: [lng, lat]
                },
                $maxDistance: 1000,
                $minDistance: 0
            }
        }
    };
    
    Game.find(query).exec((err, games) => {
        if (err) {
            console.log(`error is ${err}`);
        } else {
            res.status(200).json(games);
        }
    });
}

module.exports.gamesGetAll = (req, res) => {
    console.log(`this is the Json route`);
    console.log(`${req.query}`);
    let offset = 0;
    let count = 5;
    const maxCount = 8;

    if (req.query && req.query.lat && req.query.lng) {
        runGeoQuery(req, res);
        return;
    }
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    if (count > maxCount) {
        count = maxCount;
    }
    console.log(`offset ${offset} count ${count}`);

    Game.find().skip(offset).limit(count).exec((err, games) => {
        console.log(`found games ${games.length}`);
        res.status(200).json(games);
    });
};
module.exports.gamesGetOne = (req, res) => {
    const gameId = req.params.gameId;
    console.log(gameId);
    // const db=dbconnection.get();
    // const collection=db.collection("games");
    // collection.findOne({_id:ObjectId(gameId)},(err,docs)=>{
    //     console.log(`found the game ${req.params.gameId}`);
    //     res.status(200).json(docs); });

    Game.findById(gameId).exec(function (err, games) {

        console.log(`am i even here?`);
        if (err) {
            console.log(`here is the error ${err}`);
        }
        res.status(200).json(games);
    });

};
module.exports.gamesAddOne = (req, res) => {
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