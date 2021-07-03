//import express and use express Route
const express = require('express');
const router = express.Router();


//import controllers
const controllerJobs = require('../controller/job.controller');
//specify routes

//path for job
router.route('/jobs').get(controllerJobs.getAllJobs)
                        .post(controllerJobs.jobsAddOne);
router.route('/jobs/:id').get(controllerJobs.getOneJob)
                            .put(controllerJobs.fullUpdateJob)
                            .patch(controllerJobs.PartialUpdateJob)
                            .delete(controllerJobs.deleteJob);


//export
module.exports = router;