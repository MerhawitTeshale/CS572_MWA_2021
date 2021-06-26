const express= require('express');
 const router=express.Router();
const controllerStudent=require('../contoller/students.controller');
const controllerCourse=require('../contoller/course.controller');
router.route('/students').get(controllerStudent.getAllStudents)
                        .post(controllerStudent.AddOneStudent);
router.route('/students/:stuId').get(controllerStudent.getOneStudent)
                                .put(controllerStudent.FullUpdateStudent)
                                .patch(controllerStudent.PartialUpdateStudent)
                                .delete(controllerStudent.DeleteOneStudent);
router.route('/students/:stuId/courses').get(controllerCourse.coursesGetAll)
                                        .post(controllerCourse.coursesAddOne);
router.route('/students/:stuId/courses/:courseId').put(controllerCourse.coursesFullUpdate)
                                                    .patch(controllerCourse.coursesPartialUpdate)
                                                    .delete(controllerCourse.coursesDeleteOne);
module.exports=router;