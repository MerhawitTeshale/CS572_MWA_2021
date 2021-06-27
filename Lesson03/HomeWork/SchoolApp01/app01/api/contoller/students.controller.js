const mongoose=require('mongoose');
const { report } = require('../routes');
const Student=mongoose.model('Student');

module.exports.getAllStudents=function(req,res){
    console.log(`inside the gatAll ${req.query}`);

    Student.find().exec(function(err,students){
        const response ={
            status:200,
            message:students
        }
        if (err){
            console.log(`error finding studets ${err}`);
            response.status=500;
            response.message=err;
        } 
        res.status(response.status).json(response.message);
    });
};

module.exports.getOneStudent=function(req,res){
    console.log(`getting one student ${req.params.stuId}`);
    const studentId=req.params.stuId;
    Student.findById(studentId).exec(function(err,student){
        const response={
            status:200,
            message:student
        }
        if(err){
            console.log(`error finding student by id ${err}`);
            response.status=500;
            response.message=err;
        } 
        console.log(`found the student by id`);
        res.status(response.status).json(response.message);
    });
};