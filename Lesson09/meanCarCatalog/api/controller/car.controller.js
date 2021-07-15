const { response } = require('express');
const mongoose = require('mongoose');
const Car = mongoose.model('Car');

//getAll
module.exports.getAllCars = function (req, res) {
    console.log(`reached getAll Cars`)
    //pagination
    let offset = 0;
    let count = 5;
    const maxCount = 8;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        offset = parseInt(req.query.count);
    }
    //limit checking
    if (count > maxCount) {
        consolelog(`count exceeding`);
        res.status(400).json({ message: `cannot exceed count of ${maxCount}` });
    }
    //typechecking
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ message: `offset and count need to be number` });
    }
    Car.find().skip(offset).limit(count).exec(function (err, cars) {

        const respone = {
            status: 200,
            message: cars
        }

        if (err) {
            console.log(`cars finding error`);
            respone.status = 500;
            respone.message = err;
        } else if (!cars) {
            respone.status = 404;
            respone.message = { message: "caar not found" };
        }
        res.status(respone.status).json(respone.message);
    });
};

//get one
module.exports.getOneCar = function (req, res) {
    console.log(`reached get Cars by id`);

    console.log(req.params.carId);
    const carId = req.params.carId;
    Car.findById(carId).exec(function (err, car) {

        const respone = {
            status: 200,
            message: car
        }

        if (err) {
            console.log(`car id not found`);
            respone.status = 500;
            respone.message = err;
        } else if (!car) {
            console.log(`no car to show`);
            respone.status = 404;
            respone.message = { message: "car not found" };
        }
        res.status(respone.status).json(respone.message);
    });
};

//add one 
module.exports.addOneCar = function (req, res) {
    console.log(`Post request for adding a car coming`);
    //console.log(`the req body is ${req.body.name}`);
    const newCar = {
        name: req.body.name,
        model: req.body.model,
        year: parseInt(req.body.year),
        engine: {},
        review: []
    }
    //console.log(`new car is ${newCar.name}`);
    Car.create(newCar, function (err, car) {
        const respose = {
            status: 201,
            message: car
        }
        if (err) {
            console.log(`error adding the game`);
            respose.status = 500;
            respose.message = err;
        }

        res.status(respose.status).json(respose.message);
    });
};

//full update
module.exports.fullUpdateCar = function (req, res) {
    console.log(`in full udate...`);
    const carId = req.params.carId;
    if (carId.length != 24) {
        console.log(`car Id is not valid lenght`);
        return;
    }
    Car.findById(carId).exec(function (err, car) {
        const respose = {
            status: 204,
            message: car
        }
        if (err) {
            console.log(`error finding car`);
            respose.status = 500;
            respose.message = err;
        } else if (!car) {
            console.log(`car not found by id `);
            respose.status = 404;
            respose.message = { message: "car not found by id" };
        }
        if (respose.status !== 204) {
            console.log(`error happened`);
            res.status(respose.status).json(respose.message);
        }
        else {
            //updating 
            car.name = req.body.name;
            car.model = req.body.model;
            car.year = parseInt(req.body.year);

            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while saving`)
                    respose.status = 500;
                    respose.message = err;
                } else {
                    respose.message = updatedCar;
                }

                res.status(respose.status).json(respose.message);
            });
        }
    });


};

//partial update

module.exports.partialUpdateCar = function (req, res) {
    console.log(`in full udate...`);
    const carId = req.params.carId;
    if (carId.length != 24) {
        console.log(`car Id is not valid lenght`);
        return;
    }
    Car.findById(carId).exec(function (err, car) {
        const respose = {
            status: 204,
            message: car
        }
        if (err) {
            console.log(`error finding car`);
            respose.status = 500;
            respose.message = err;
        } else if (!car) {
            console.log(`car not found by id `);
            respose.status = 404;
            respose.message = { message: "car not found by id" };
        }
        if (respose.status !== 204) {
            console.log(`error happened`);
            res.status(respose.status).json(respose.message);
        }
        else {
            //updating 

            if (req.body.name) {
                car.name = req.body.name;
            }
            if (req.body.model) {
                car.model = req.body.model;
            }
            if (req.body.year) {
                car.year = parseInt(req.body.year);
            }
            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while saving`)
                    respose.status = 500;
                    respose.message = err;
                } else {
                    respose.message = updatedCar;
                }

                res.status(respose.status).json(respose.message);
            });
        }
    });

};

//delete car

module.exports.deleteOneCar = function (req, res) {
    console.log(`delete request for deleting a car recieved`);

    const carId = req.params.carId;
    console.log(`car id is ${carId}`);
    if (carId.length != 24) {
        console.log(`car Id is not valid lenght`);
        return;
    }

    Car.findByIdAndDelete(carId).exec(function (err, deletedCar) {
        const response = {
            status: 204,
            message: deletedCar
        };

        if (err) {
            console.log(`internal error delteing game`);
            response.status = 500;
            response.message = err;
        } else if (!deletedCar) {
            response.status = 404;
            response.message = { message: "the car to be delted is not found" };
        }

        console.log(`delted successfully`);
        res.status(response.status).json(response.message);
    });
};