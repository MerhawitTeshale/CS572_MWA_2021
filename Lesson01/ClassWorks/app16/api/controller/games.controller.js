const gamesData=require('../../data/games.json');

module.exports.gamesGetAll=(req,res)=>{
    console.log(`this is the Json route`);
    res.status(200).json(gamesData);
};
module.exports.gamesGetOne=(req,res)=>{
    const gameId=req.params.gameId;
    const thegame=gamesData[gameId];
    console.log(`GET game with ID ${gameId}`);
    res.status(200).json(thegame);
};