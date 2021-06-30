const mongoose=require('mongoose');


const engineSchema= mongoose.Schema({
    type:String,
    power:String,
    transmission:String,
    fuelEconomy:Number
});

const reviewSchema=mongoose.Schema({
    name:String,
    rate:Number,
    review:String
});

const carSchema=mongoose.Schema({
    name:String,
    model:String,
    year:Number,
    engine:engineSchema,
    review:[reviewSchema]
});

mongoose.model('Car',carSchema,'cars');