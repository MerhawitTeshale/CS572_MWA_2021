const { query } = require('express');
const gamesData = require('../data/games.json');
const dbConnection = require('../data/dbconnection');
module.exports.gamesGetAll = (req, res) => {
    console.log(`this is the Json route`);
    console.log(`${req.query}`);

    let offset = 0;
    if (req.query && !req.query.offset) {
        console.log(req.query.offset);
        offset = 4;
    }
    if (req.query && req.query.offset) {
        if (parseInt(req.query.offset) <= 8) {
            offset = parseInt(req.query.offset);
        } else {
            offset = 8;
        }
    }
    const db = dbConnection.get();
    const collection = db.collection("games");
    const docs = collection.find().limit(offset).toArray((err, docs) => {
        res.status(200).json(docs);
    });

};

