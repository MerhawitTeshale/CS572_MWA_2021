const mongoose=require('mongoose');

const publisherSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        address:String,
        coordiantes:{
            type:[Number],
            index:"2dsphere"
        }
    }
});
const gameSchema=new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    price:Number,
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
    publisher: publisherSchema
});

//compiling

mongoose.model('Game',gameSchema,'games');
