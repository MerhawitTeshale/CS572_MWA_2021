const mongoose = require('mongoose');
const City = mongoose.model("City");

//search based on location
const runGeoQuery= function(req,res){
    const lng=parseFloat(req.query.lng);
    const lat=parseFloat(req.query.lat);
    const dis=parseInt(req.query.far);
console.log(`here at run Geo`);
    const query={
        loc:{
            $near:{
                $geometry:{
                    type:'point',
                    coordinates:[lng,lat]
                },
                $maxDistance:dis,
                $minDistance:0
            }
        }
    };
    City.find(query).exec((err,cities)=>{
        if(err){
            console.log(`error while searching....${err}`);
        } else{
            console.log(cities);
            res.status(200).json(cities);
        }
    })
}
module.exports.getAllCities = (req, res) => {
    console.log(`GET request recieved for all cities`);
    const response = {
        status: 200,
        message: {}
    }
    //pagination
    const defaultCount = 5;
    const maxCount = 8;

    let offset = 0;
    let count = defaultCount;

    //accept user input if it exists 
    if (req.query && req.query.offset) {
       // console.log(`the offset is ${req.query.offset}`);
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }

    //geo locaton search
    if(req.query&& req.query.lat && req.query.lng && req.query.far){
        console.log(`i am here.....at search`)
        runGeoQuery(req,res);
        return;
    }
    //limit check
    if (count > maxCount) {
        console.log(`limit for count is exxeeced`);
        response.status = 400;
        response.message = { message: `count exceed count of ${maxCount}` };
        res.status(response.status).json(response.message);
        return;
    }
    //type checking
    if (isNaN(offset) || isNaN(count)) {
        response.status = 400;
        response.message = { message: "count and offset need to be a number" };
    }
    
    City.find().skip(offset).limit(count).exec((err, cities) => {
        const response = {
            status: 200,
            message: cities
        }
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!cities) {
            response.status = 400
            response.message = { message: "city is not found" };
        }
        res.status(response.status).json(response.message);
    });
};


module.exports.getOneCity = (req, res) => {
    console.log(`get request for one city recieved`);
    const cityId = req.params.id;
    if (!cityId.length == 24) {
        console.log(`city id not valid`);
        res.status(400).json({ message: "city id not valid" });
    }
    City.findById(cityId).exec((err, city) => {
        const response = {
            status: 200,
            message: city
        };
        if (err) {
            console.log(`error occured searching for a city`);
            response.status = 500;
            response.message = err;
        } else if (!city) {
            console.log(`city is not found`);
            response.status = 400;
            response.message = { message: "city not found by ID" };
        }
        res.status(response.status).json(response.message);

    });
};

// //add one City
module.exports.addOneCity = (req, res) => {
    console.log(`Post request for adding a city recieved`);
    console.log(req.body);
    const newCity = {
        city: req.body.city,
        zip: req.body.zip,
        pop:parseInt(req.body.pop),
        state: req.body.state,
        // loc:{
        //      coordinates:[req.body.lng, req.body.lat]
        //  }
    }

    City.create(newCity, (err, city) => {
        const response = {
            status: 201,
            message: city
        }
        if (err) {
            console.log(`error occure while saving new city`);
            response.status = 500;
            response.message = err
        } else if (!city) {
            response.status = 400;
            response.message = { message: "city was not created" };

        }
        res.status(response.status).json(response.message);
    });
};

//delete a city
module.exports.deleteCity = (req, res) => {
    console.log(`request for deleting a city is recieved`);
    const cityId = req.params.id;

    if (cityId.length !== 24) {
        res.status(400).json({ message: "ID is not valid" });
    }
    City.findByIdAndDelete(cityId).exec((err, city) => {
        const response = {
            status: 201,
            message: city
        };
        if (err) {
            console.log(`error occured deleting a city`);
            response.status = 500;
            response.message = err;
        } else if (!city) {
            response.status(400);
            response.message = { message: "city to be deleted is not found" };
        }
        res.status(response.status).json(response.message);
    });
};


