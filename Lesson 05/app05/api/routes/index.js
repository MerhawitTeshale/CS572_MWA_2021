const express= require('express');
 const router=express.Router();
 const controllerGames=require("../controller/games.controller");
 const controllerPublisher=require("../controller/publisher.controller");

 router.route('/games').get(controllerGames.gamesGetAll)
                        .post(controllerGames.gamesAddOne);
 router.route('/games/:gameId').get(controllerGames.gamesGetOne);
 router.route('/games/:gameId/publisher').get(controllerPublisher.publisherGetOne);

 module.exports=router;