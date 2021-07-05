//import express and use express Route
const express = require('express');
const router = express.Router();


//import controllers
const controllerJobs = require('../controller/job.controller');
const controllerSkill=require('../controller/skill.controller');
const controllerUsers=require('../controller/user.controller');
//specify routes

//path for job
router.route('/jobs').get(controllerJobs.getAllJobs)
                        .post(controllerJobs.jobsAddOne);
router.route('/jobs/:id').get(controllerJobs.getOneJob)
                            .put(controllerJobs.fullUpdateJob)
                            .patch(controllerJobs.PartialUpdateJob)
                            .delete(controllerJobs.deleteJob);

//path for skill
router.route('/jobs/:id/skills').get(controllerSkill.getAllSkills)
                                .post(controllerSkill.addSkill);
router.route('/jobs/:id/skills/:skillId').delete(controllerSkill.delteSkill);

//path for searching job
router.route('/jobs/search').get(controllerJobs.searchJob);

//user ApI
router.route('/users/register').post(controllerUsers.register);
router.route('/users/login').post(controllerUsers.login);
//export
module.exports = router;