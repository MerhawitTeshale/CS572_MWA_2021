//require
const mongoose = require('mongoose');

//create schema
const citySchema = new mongoose.Schema({
    city: String,
    zip: Number,
    pop: Number,
    state:String,
    // loc:{
    //     coordinates:{
    //         type:[Number],
    //         index:"2dsphere"
    //     }
    // }
 
});

//compile
mongoose.model('City',citySchema,'zips');