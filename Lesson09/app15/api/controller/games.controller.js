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
};

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
    //Type checking
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ message: "offset and count need to be a number" });
    }
    //limit checking 
    if (count > maxCount) {
        console.log(`count exceeding the max `);
        res.status(400).json({ message: "cannot exceed count of" + maxCount });
    }
    console.log(`offset ${offset} count ${count}`);

    Game.find().skip(offset).limit(count).exec((err, games) => {
        //hardening
        if (err) {
            console.log(`Error finding games ${err}`);
            res.status(500).json(err);
        } else {
            console.log(`found games ${games.length}`);
            res.status(200).json(games);
        }
    });
};
module.exports.gamesGetOne = (req, res) => {
    const gameId = req.params.gameId;
    console.log(gameId.length);

    Game.findById(gameId).exec(function (err, games) {
        const response = {
            status: 200,
            message: games
        }

        if (err) {
            console.log(`erro finding game ${err}`);
            //this is not a termination point but it give the illusion
            // res.status(500).json(err);
            // this is how we correct them
            response.status = 500;
            response.message = err;
        } else if (!games) { //result checking
            // res.status(400).json();
            response.status = 400;
            response.message = { message: "game ID not found" };
        }
        res.status(response.status).json(response.message);

    });

};

module.exports.gamesAddOne = (req, res) => {
    console.log(`POST request coming`);
    console.log(req.body);
    const newGame = {
        title: req.body.title,
        price: parseFloat(req.body.price),
        year: parseInt(req.body.year),
        minPlayers: parseInt(req.body.minPlayers),
        maxPlayers: parseInt(req.body.maxPlayers),
        minAge: parseInt(req.body.minAge),
        rate: parseInt(req.body.rate),
        designers: req.body.designers,
        publisher: {}
    }
    Game.create(newGame, function (err, game) {
        const response = {
            status: 200,
            message: game
        }
        if (err) {
            console.log(`erro finding game ${err}`);
            response.status = 500;
            response.message = err;
        } else if (!game) {
            response.status = 400;
            response.message = { message: "game ID not found" };
        }
        res.status(response.status).json(response.message);
    });
};

module.exports.gamesFullUpdateOne = (req, res) => {
    console.log(`Full update request recieved`);
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
            game.title = req.body.title;
            game.price = parseFloat(req.body.price);
            game.year = parseInt(req.body.year);
            game.minPlayers = parseInt(req.body.minPlayers);
            game.maxPlayers = parseInt(req.body.maxPlayers);
            game.minAge = parseInt(req.body.minAge);
            game.rate = parseInt(req.body.rate);
            game.designers = req.body.designers;
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

module.exports.gamesPartialUpdateOne = (req, res) => {
    console.log(`partial update request recieved`);
    const gameId = req.params.gameId;
    if (gameId.length != 24) {
        console.log(`err lenght`);
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

           console.log(`good status for update`);
            if (req.body.title) {
                game.title = req.body.title;
                console.log(`hello in title`)
            }
            if (req.body.price) {
                game.price = parseFloat(req.body.price);
            }
            if (req.body.year) {
                game.year = parseInt(req.body.year);
            }
            if (req.body.minPlayers) {
                game.minPlayers = parseInt(req.body.minPlayers);
            }
            if (req.body.maxPlayers) {
                game.maxPlayers = parseInt(req.body.maxPlayers);
            }
            if (req.body.minAge) {
                game.minAge = parseInt(req.body.minAge);
            }
            if (req.body.rate) {
                game.rate = parseInt(req.body.rate);
            }
            if (req.body.designers) {
                game.designers = req.body.designers;
            }


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

module.exports.gamesDeleteOne = (req, res) => {
    const gameId = req.params.gameId;
    console.log(gameId.length);

    Game.findByIdAndRemove(gameId).exec(function (err, deletedgames) {
        const response = {
            status: 204,
            message: deletedgames
        }

        if (err) {
            console.log(`erro deleting game ${err}`);
            response.status = 500;
            response.message = err;
        } else if (!deletedgames) {
            response.status = 404;
            response.message = { message: "game to be deleted not found" };
        }
        console.log(`deleted`)
        res.status(response.status).json(response.message);

    });

};