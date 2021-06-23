const { query } = require('express');
const gamesData=require('../../data/games.json');

module.exports.gamesGetAll=(req,res)=>{
    console.log(`this is the Json route`);
   // console.log(`${req.query}`);

    let offset=0;
    let count=5;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        offset=parseInt(req.query.count);
    }
    const pageGames=gamesData.slice(offset,offset+count);
    console.log(offset,count);
    res.status(200).json(pageGames);
};
module.exports.gamesGetOne=(req,res)=>{
    const gameId=req.params.gameId;
    const thegame=gamesData[gameId];
    console.log(`GET game with ID ${gameId}`);
    res.status(200).json(thegame);
};