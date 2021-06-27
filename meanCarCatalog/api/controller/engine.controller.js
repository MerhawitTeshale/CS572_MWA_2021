const { response } = require('express');
const mongoose = require('mongoose');
const Car = mongoose.model('Car');



//add one function
const _addEngine = function (req, res, car) {

    car.engine = car.engine || {};
    console.log(`the request type is ${req.body.type}`);
    car.engine.type = req.body.type;
    car.engine.power = req.body.power;
    car.engine.transmission = req.body.transmission;
    car.engine.fuelEconomy = parseFloat(req.body.fuelEconomy);

    car.save(function (err, updatedCar) {
        const respone = {
            status: 200,
            message: updatedCar
        }

        if (err) {
            console.log(`internal error getting updated car`);
            console.log(`${err}`)
            respone.status = 500;
            respone.message = err;
        } else if (!updatedCar) {
            respone.status = 404;
            respone.message = { message: "updated car not found" };
        }
        if (updatedCar) {
            console.log(`added sucessfully`)
            res.status(respone.status).json(respone.message);
        } else {
            res.status(respone.status).json(respone.message);
        }


    });
};



//get one
module.exports.getEngine = function (req, res) {
    console.log(`get request fot engine recieved`);

    const carId = req.params.carId;
    console.log(`car id is ${carId}`);

    Car.findById(carId).select('engine').exec(function (err, engine) {
        const respone = {
            status: 200,
            message: engine
        }

        if (err) {
            console.log(`internal error getting a car`);
            respone.status = 500;
            respone.message = err;
        } else if (!engine) {
            respone.status = 404;
            respone.message = { message: "engine not found" };
        }
        res.status(respone.status).json(respone.message);
    });
};

//add one 
module.exports.addEngine = function (req, res) {
    console.log(`post request recieved`);

    const carId = req.params.carId;
    console.log(`car id is ${carId}`);

    Car.findById(carId).exec(function (err, car) {
        const response = {
            status: 201,
            message: car
        };

        if (err) {
            console.log(`error looking for car`);
            response.status = 500;
            response.message = err;
        } else if (!car) {
            response.status = 404;
            response.message = { message: "car not found by ID" };
        }
        if (car) {
            _addEngine(req, res, car);
        } else {
            res.status(response.status).json(response.message);
        }
    });
};

//full update
module.exports.fullUpdateEngine = function (req, res) {
    console.log(`in engine full udate...`);
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
            car.engine.type = req.body.type;
            car.engine.power = req.body.power;
            car.engine.transmission = req.body.transmission;
            car.year.fuelEconomy = parseFloat(req.body.fuelEconomy);

            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while updating`)
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

module.exports.partialUpdateEngine = function (req, res) {
    console.log(`in engine partial udate...`);
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
            if (req.body.type) {
                car.engine.type = req.body.type;
            }
            if (req.body.power) {
                car.engine.power = req.body.power;
            }
            if (req.body.transmission) {
                car.engine.transmission = req.body.transmission;
            }

            if (req.body.fuelEconomy) {
              console.log(`the fuel economy is ${req.body.fuelEconomy}`);
                car.engine.fuelEconomy = parseFloat(req.body.fuelEconomy);
               
            }
            console.log(`the fuel economy is ${car.engine.fuelEconomy}`);
            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while updating`)
                    respose.status = 500;
                    respose.message = err;
                } else {
                    respose.message = updatedCar;
                }
                if(!updatedCar){
                   respose.status=404;
                   respose.message={message:"updated car not found"};
                } else{
                    console.log(`updating the car`)
                    res.status(respose.status).json(respose.message);
                }
               
            });
        }
    });

};

//delete car

module.exports.deleteEngine = function (req, res) {
    console.log(`delete requset for engine recieved`);
    
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
        } else{
            //deleting 

            if(!car.engine){
                console.log(`car engine not found`);
                respose.status=404;
                respose.message={message:"car engine is not found"};
            } else{
                car.engine.remove();
                car.save(function (err, updatedCar) {
                    if (err) {
                        console.log(`error while updating`)
                        respose.status = 500;
                        respose.message = err;
                    } else {
                        respose.message = updatedCar;
                    }
    
                    res.status(respose.status).json(respose.message);
                });

            }
        }
    });
};