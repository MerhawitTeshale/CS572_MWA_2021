const express = require('express');
const router = express.Router();

//require the controller
const carController = require('../controller/car.controller');
const engineController = require('../controller/engine.controller');
const reviewController = require('../controller/review.controller');

//path

//cars
router.route('/cars').get(carController.getAllCars)
                    .post(carController.addOneCar);
router.route('/cars/:carId')
                            .get(carController.getOneCar)
                            .put(carController.fullUpdateCar)
                            .patch(carController.partialUpdateCar)
                            .delete(carController.deleteOneCar);

//engine
router.route('/cars/:carId/engine')
                                .get(engineController.getEngine)
                                .post(engineController.addEngine)
                                .put(engineController.fullUpdateEngine)
                                .patch(engineController.partialUpdateEngine)
                                .delete(engineController.deleteEngine);


//review
router.route('/cars/:carId/reviews').get(reviewController.carGetAllReview)
                                    .post(reviewController.carAddReview);

router.route('/cars/:carId/reviews/:reviewId')
                                    .get(reviewController.carGetOneReview)
                                    .put(reviewController.carfullUpdateReview)
                                    .patch(reviewController.carPartialUpdateReview)
                                    .delete(reviewController.carDeleteReview);

//export 
module.exports = router;

