//require
const mongoose = require('mongoose');

//location is subdocument
const  locationSchema=new mongoose.Schema({
    address: String,
    coordinates: {
        type:[Number],
        index:"2dsphere"
    }
});

//create schema
const jobSchema = new mongoose.Schema({
    title: String,
    salary: Number,
    description: String,
    experience: String,
    
    skills: [String],
    postDate: {
        type: Date,
        default:Date.now
    },
    location:locationSchema
});

//compile
mongoose.model('Job',jobSchema,'jobs');