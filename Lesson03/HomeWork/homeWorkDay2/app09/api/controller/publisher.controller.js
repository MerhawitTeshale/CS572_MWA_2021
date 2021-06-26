const e = require('express');
const mongoose=require('mongoose');
const Game=mongoose.model("Game");

 const _addPublisher=function(req,res,game){
     console.log(`publisher name: ${req.body.name}`);
     console.log(`publisher address: ${req.body.address}`);
     game.publisher.name=req.body.name;
     game.publisher.address=req.body.address;
     //game.publisher.location.coordinates=[parseFloat(req.body.lng),parseFloat(req.body.lat)];
     game.save(function(err,updatedGame){
        console.log(updatedGame); 
        //hardening
         const response={
            status:201,
            message:updatedGame
        };
        if (err) {
            console.log(`erro creating publisher ${err}`);
           response.status=500;
           response.message=err;
        }
        res.status(response.status).json(response.message);
     });
 };
module.exports.publisherGetOne=function(req,res){
    console.log("get request for publisher");
    const gameId=req.params.gameId;
    console.log(`game id ${gameId}`);
    Game.findById(gameId).select("publisher").exec(function(err,publisher){
        const response={
            status:200,
            message:publisher
        }
        if (err){
            response.status=500;
            response.message=err;
        } else if (!publisher){
            response.status=400;
            response.message={message:"publisher not found"}
        }
        res.status(response.status).json(response.message);
    });
};
module.exports.publisherAddOne=function(req,res){
    console.log(`POST new publisher`);
    const gameId=req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        const response={
            status:201,
            message:game
        };
        if (err) {
            console.log(`error looking for game ${err}`);
           response.status=500;
           response.message=err;
        } else if(!game){
            response.status=400;
            response.message={message:"game ID not found"};
        } 
        if (game){
            _addPublisher(req,res,game);

        } else{
        res.status(response.status).json(response.message);
    }
    });
};

module.exports.publisherUpdateOne=function(req,res){
    console.log(`publisher update request recieved`);
    const gameId = req.params.gameId;
    if (gameId.length != 24) {
        console.log(`game Id is not valid lenght`);
        return;
    }

    Game.findById(gameId).exec(function (err, game) {
        const response = {
            status: 204,
            message: game
        }

        if (err) {
            console.log(`error finding game ${err}`);
            response.status = 500;
            response.message = err;
        } else if (!game) {
            response.status = 400;
            response.message = { message: "game ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {

            //update
            if(req.body.name){
            game.publisher.name=req.body.name;
            }
            if(req.body.address){
            game.publisher.address=req.body.address;
        }
            console.log(`publisher name ${req.body.name}`);
            console.log(`publisher address ${req.body.address}`);
            //game.publisher = {};

            game.save(function (err, updatedGame) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                } else {
                    response.message = updatedGame;
                }
                res.status(response.status).json(response.message);
            });
        }


    });
};

module.exports.publisherDeleteOne=function(req,res){
    console.log("delete request for publisher");
    const gameId=req.params.gameId;
    console.log(`game id ${gameId}`);
    Game.findById(gameId).exec(function(err,game){
        const response={
            status:204,
            message:game
        }
        if (err){
            response.status=500;
            response.message=err;
        } else if (!game){
            response.status=404;
            response.message={message:"game not found"}
        }
        if(response.status!==204){
        res.status(response.status).json(response.message);
        } else{
            //delete the publisher

            if(!game.publisher){
                console.log(`could not find the publisher`);
                response.status=404;
            }
            game.publisher.remove();
            game.save(function (err,game){
                const response={
                    status:204,
                    message:game
                }
                if (err){
                    console.log(`error delteing publisher`);
                    response.status=500;
                    response.message={message:"couldnt delete publisher"};
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};