//import express and use express Route
const express = require('express');
const router = express.Router();


//import controllers
const controllerCity = require('../controller/city.controller');

//specify routes

//path for city
router.route('/cities').get(controllerCity.getAllCities)
                        .post(controllerCity.addOneCity);
router.route('/cities/:id').get(controllerCity.getOneCity)
                            .delete(controllerCity.deleteCity);
                        
//export
module.exports = router;