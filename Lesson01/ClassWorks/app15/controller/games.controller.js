const gamesData=require('../data/games.json');

module.exports.gamesGetAll=(req,res)=>{
    console.log(`this is the Json route`);
    res.status(200).json(gamesData);
};