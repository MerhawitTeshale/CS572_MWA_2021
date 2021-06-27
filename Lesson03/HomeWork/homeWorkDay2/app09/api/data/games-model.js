const mongoose = require('mongoose');

const reviewSchema= new mongoose.Schema({
    name:String,
    review:String,
    date:{
        type:Date,
        "default":Date()
    }
});
const publiserSchema = new mongoose.Schema({
    name:String,
    address: String,
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
    publisher: publiserSchema,
    review:[reviewSchema]
});


//compiling
mongoose.model("Game", gameSchema, "games");