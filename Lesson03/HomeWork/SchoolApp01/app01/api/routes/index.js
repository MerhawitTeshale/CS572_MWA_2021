const express= require('express');
 const router=express.Router();
const controllerStudent=require('../contoller/students.controller');
const controllerCourse=require('../contoller/course.controller');
router.route('/students').get(controllerStudent.getAllStudents);
router.route('/students/:stuId').get(controllerStudent.getOneStudent);
router.route('/students/:stuId/courses').get(controllerCourse.coursesGetAll);
router.route('/students/:stuId/courses/:courseId').get(controllerCourse.coursesGetAll);

module.exports=router;