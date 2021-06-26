const mongoose=require('mongoose');
const Student=mongoose.model('Student');

module.exports.coursesGetAll=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    Student.findById(studentId).select("course").exec(function(err,courses){
        res.status(200).json(courses);
    });
}
module.exports.coursesGetOne=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    const courseId=req.params.courseId;
    Game.findById(studentId).select("course").exec(function(err,courses){
        const course=courses.course.id(courseId);
        res.status(200).json(course);
    });
}
module.exports.coursesAddOne=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    const courseId=req.params.courseId;
    Game.findById(studentId).select("course").exec(function(err,courses){
        const course=courses.course.id(courseId);
        res.status(200).json(course);
    });
}
module.exports.coursesDeleteOne=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    const courseId=req.params.courseId;
    Game.findById(studentId).select("course").exec(function(err,courses){
        const course=courses.course.id(courseId);
        res.status(200).json(course);
    });
}
module.exports.coursesPartialUpdate=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    const courseId=req.params.courseId;
    Game.findById(studentId).select("course").exec(function(err,courses){
        const course=courses.course.id(courseId);
        res.status(200).json(course);
    });
}
module.exports.coursesFullUpdate=function(req,res){
    console.log(req.params.stuId);
    const studentId=req.params.stuId;
    const courseId=req.params.courseId;
    Game.findById(studentId).select("course").exec(function(err,courses){
        const course=courses.course.id(courseId);
        res.status(200).json(course);
    });
}