const mongoose = require('mongoose');
const publiserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        address: String,
         //longtitude(e/w) and latitude(n/s)
        coordinates: {
            type:[Number],
            index:"2dsphere"
        }
       
    }
});
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true// value need to be provided
    },
    price: Number,
    year: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    minAge: {
        type: Number,
        min: 4
    },
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    },
    designers: [String],
    publisher: publiserSchema
});
//compiling
mongoose.model("Game", gameSchema, "games");