const express= require('express');
 const router=express.Router();
 const controllerGames=require("../controller/games.controller");
 const controllerPublisher=require("../controller/publisher.controller");
const controllerReview=require("../controller/review.control");

//games API
 router.route('/games').get(controllerGames.gamesGetAll)
                        .post(controllerGames.gamesAddOne);
 router.route('/games/:gameId').get(controllerGames.gamesGetOne)
                                .put(controllerGames.gamesFullUpdateOne)
                                .patch(controllerGames.gamesPartialUpdateOne)
                                .delete(controllerGames.gamesDeleteOne);

//publisher API
 router.route('/games/:gameId/publisher').get(controllerPublisher.publisherGetOne)
                                         .post(controllerPublisher.publisherAddOne)
                                         .put(controllerPublisher.publisherUpdateOne)
                                         .delete(controllerPublisher.publisherDeleteOne);

//reviews API
router.route('/games/:gameId/reviews').get(controllerReview.reviewgetAll)
                                     .post(controllerReview.reviewAddOne);                                                  
router.route('/games/:gameId/reviews/:reviewId').put(controllerReview.reviewUpdateOne)                                                           .put()
                                                 .delete(controllerReview.reviewDeleteOne);
 module.exports=router;