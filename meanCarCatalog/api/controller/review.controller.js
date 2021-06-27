const mongoose = require('mongoose');
const Car = mongoose.model('Car');

//add one function
const _addReview = function (req, res, car) {

    car.review = car.review || [];
    if (req.body) {
        car.review.push(req.body);
    }
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

//get All
module.exports.carGetAllReview = function (req, res) {
    console.log(`reached get all review get requesst`)

    
    const carId = req.params.carId;
    Car.findById(carId).select('review').exec(function (err, car) {
        const respone = {
            status: 200,
            message: car
        }

        if (err) {
            console.log(`cars finding error`);
            respone.status = 500;
            respone.message = err;
        } else if (!car) {
            respone.status = 404;
            respone.message = { message: "caar not found" };
        }
        res.status(respone.status).json(respone.message);
    });
};
//get one
module.exports.carGetOneReview = function (req, res) {
    console.log(`get request for review recieved`);

    const carId = req.params.carId;
    console.log(`car id is ${carId}`);

    Car.findById(carId).exec(function (err, car) {
        const respone = {
            status: 200,
            message: car
        }

        if (err) {
            console.log(`internal error getting a review`);
            respone.status = 500;
            respone.message = err;
        } else if (!car) {
            respone.status = 404;
            respone.message = { message: "car ID not found" };
        } else {
            const reviewId = req.params.reviewId;
           console.log(`review id to be updated is ${reviewId}`);  
        respone.message={message:car.review.id(reviewId)};
        }
        res.status(respone.status).json(respone.message);
    });
};

//add one 
module.exports.carAddReview = function (req, res) {
    console.log(`post request recieved for reviews`);

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
            _addReview(req, res, car);
        } else {
            res.status(response.status).json(response.message);
        }
    });
};

//full update
module.exports.carfullUpdateReview = function (req, res) {
    console.log(`in review full udate...`);
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
            const reviewId=req.params.reviewId;
            console.log(`reviewId is ${reviewId}`);

            
            car.review.id(reviewId).name = req.body.name;
            car.review.id(reviewId).rate = req.body.rate;
            car.review.id(reviewId).review = req.body.review;


            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while updating`)
                    respose.status = 500;
                    respose.message = err;
                } else {
                    respose.message = updatedCar;
                }
                console.log(`success.............`)
                res.status(respose.status).json(respose.message);
            });
        }
    });
};

//partial update

module.exports.carPartialUpdateReview = function (req, res) {
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
            // partial updating 
            const reviewId=req.params.reviewId;
            console.log(`reviewId is ${reviewId}`);

            if(req.body.name){
                car.review.id(reviewId).name = req.body.name;
            }
            if(req.body.rate){
                car.review.id(reviewId).rate = req.body.rate;

            }
            if(req.body.review){
             car.review.id(reviewId).review = req.body.review;   
            }

            car.save(function (err, updatedCar) {
                if (err) {
                    console.log(`error while updating`)
                    respose.status = 500;
                    respose.message = err;
                } else {
                    respose.message = updatedCar;
                }
                console.log(`success.............`)
                res.status(respose.status).json(respose.message);
            });
        }
    });
};

//delete car

module.exports.carDeleteReview = function (req, res) {
    console.log(`delete requset for review recieved`);

    const carId = req.params.carId;
    if (carId.length != 24) {
        console.log(`car Id is not valid lenght`);
        return;
    }
    Car.findById(carId).select("review").exec(function (err, car) {
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
        } else {
            //deleting 

            if (!car.review) {
                console.log(`car review not found`);
                respose.status = 404;
                respose.message = { message: "car review is not found" };
            } else {
                //deleting car review

                const reviewId=req.params.reviewId;
                console.log(`review id is ${reviewId}`);
                car.review.id(reviewId).remove();
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