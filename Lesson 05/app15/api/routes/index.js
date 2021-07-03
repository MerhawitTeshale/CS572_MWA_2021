const express= require('express');
 const router=express.Router();
 const controllerGames=require("../controller/games.controller");
 const controllerPublisher=require("../controller/publisher.controller");
const controllerReview=require("../controller/review.control");
const controllerUsers=require("../controller/users.controller")
//games API
 router.route('/games').get(controllerGames.gamesGetAll)
                        .post(controllerUsers.authenticate,controllerGames.gamesAddOne);
 router.route('/games/:gameId').get(controllerGames.gamesGetOne)
                                .put(controllerUsers.authenticate,controllerGames.gamesFullUpdateOne)
                                .patch(controllerUsers.authenticate,controllerGames.gamesPartialUpdateOne)
                                .delete(controllerUsers.authenticate,controllerGames.gamesDeleteOne);

//publisher API
 router.route('/games/:gameId/publisher').get(controllerPublisher.publisherGetOne)
                                         .post(controllerUsers.authenticate,controllerPublisher.publisherAddOne)
                                         .put(controllerUsers.authenticate,controllerPublisher.publisherUpdateOne)
                                         .delete(controllerUsers.authenticate,controllerPublisher.publisherDeleteOne);

//reviews API
router.route('/games/:gameId/reviews').get(controllerReview.reviewgetAll)
                                     .post(controllerUsers.authenticate,controllerReview.reviewAddOne);                                                  
router.route('/games/:gameId/reviews/:reviewId').put(controllerUsers.authenticate,controllerReview.reviewUpdateOne)                                                           .put()
                                                 .delete(controllerUsers.authenticate,controllerReview.reviewDeleteOne);
 module.exports=router;