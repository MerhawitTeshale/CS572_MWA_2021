//what we want our games to look like 
//BAD practice-- dont replace the _id provided by mongodb
const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    //title-  String-schemaType
    //title:String,
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
    designers: [String]
});
//the thrid parameter is optional and if not provided it will be 
// the model name (Games) lower case the first letter and add and s
mongoose.model("Game",gameSchema,"games");