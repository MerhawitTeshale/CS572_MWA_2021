const mongoose=require('mongoose');
const Game=mongoose.model("Game");

const _addReview=function(req,res,game){
    console.log(`review name:${req.body.name}`);
    console.log(`review review:${req.body.review}`);
       if(req.body.date){
    console.log(`review date:${req.body.date}`);
 
    }
    game.review.push(req.body);
    game.save(function(err,game){
        const response={
            status:201,
            message:game
        };
        if (err) {
            console.log(`erro creating publisher ${err}`);
           response.status=500;
           response.message=err;
        }
        res.status(response.status).json(response.message);
    });
    res.status(201).json(game);
};
module.exports.reviewAddOne=function(req,res){
    console.log(`get request for reviews`);
    const gameId=req.params.gameId;
    console.log(gameId);

    Game.findById(gameId).exec(function(err,game){

        const response={
            status:201,
            message:game
        };
        if (err){
            console.log(`error looking for games ${err}`);
            response.status=500;
            response.message=err;
        } else if(!game){
            response.status=400;
            response.message={message:"game not found by Id"};
        }
        if (game){
            _addReview(req,res,game);
        } else{
            res.status(response.status).json(response.message);
        }
    });

};

module.exports.reviewgetAll=function(req,res){
 console.log(`get request for review`);

 const gameId=req.params.gameId;
    console.log(`game id ${gameId}`);
    Game.findById(gameId).select("review").exec(function(err,review){
        const response={
            status:200,
            message:review
        }
        if (err){
            response.status=500;
            response.message=err;
        } else if (!review){
            response.status=400;
            response.message={message:"review not found"}
        }
        console.log(review);
        res.status(response.status).json(response.message);
    });
};

module.exports.reviewUpdateOne=function(req,res){
    console.log(`review update request recieved`);
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

            const reviewId=req.params.reviewId;
            console.log(`review id to be updated ${reviewId}`);

            //update
            
            game.review.id(reviewId).name=req.body.name;
            game.review.id(reviewId).review=req.body.review;
            game.review.id(reviewId).date=req.body.date;
            
            if(req.body.address){
            game.publisher.address=req.body.address;
        }
            console.log(`reviewer name ${req.body.name}`);
            console.log(`reviewer address ${req.body.address}`);
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

module.exports.reviewDeleteOne=function(req,res){
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

            if(!game.review){
                console.log(`could not find the review`);
                response.status=404;
            }
            const reviewId=req.params.reviewId;
            game.review.id(reviewId).remove();
            game.save(function (err,game){
                const response={
                    status:204,
                    message:game
                }
                if (err){
                    console.log(`error delteing review`);
                    response.status=500;
                    response.message={message:"couldnt delete review"};
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};