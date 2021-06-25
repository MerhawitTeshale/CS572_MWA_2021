const mongoose=require('mongoose');
const Game=mongoose.model('Game');
module.exports.gamesGetAll=(req,res)=>{
    console.log(`this is the Json route`);
    console.log(`${req.query}`);

    let offset=0;
    let count=5;
    const maxCount=8;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        count=parseInt(req.query.count);
    }
    if(count>maxCount){
        count=maxCount;
    }
    
    Game.find().skip(offset).limit(count).exec(function (err,games){
        if(err){
            console.log(`error at getAll occured ${err}`);
        }
        console.log(`found games ${games.length}`);
        res.status(200).json(games);
    });
    
};
module.exports.gamesGetOne=(req,res)=>{
    const gameId=req.params.gameId;
    console.log(gameId);

    Game.findById(gameId).exec(function(err,game){
        
        if (err){
            console.log(`error occured ${err}`);
            return;
        }
        console.log(`found game by id ${game}`);
        res.status(200).json(game);
    });
   
};
