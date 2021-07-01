const express= require('express');
const router=express.Router();
const controllerGames=require("../controller/games.controller");
const controllerPublisher=require("../controller/publisher.controller");
const controllerUsers=require('../controller/users.controller');


 router.route('/games').get(controllerGames.gamesGetAll)
                        .post(controllerGames.gamesAddOne);
 router.route('/games/:gameId').get(controllerGames.gamesGetOne);
 router.route('/games/:gameId/publisher').get(controllerPublisher.publisherGetOne);


// users routes
router.route('/users').post(controllerUsers.register);
router.route('/users/login').post(controllerUsers.login);
 module.exports=router;