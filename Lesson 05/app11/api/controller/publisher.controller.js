const mongoose=require('mongoose');
const Game=mongoose.model("Game");


module.exports.publisherGetOne=function(req,res){
    console.log();
    const gameId=req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function(err,publisher){
        res.status(200).json(publisher);
    });
}