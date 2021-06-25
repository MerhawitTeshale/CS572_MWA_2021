const mongoose=require('mongoose');
const Student=mongoose.model('Student');

module.exports.getAllStudents=function(req,res){
    console.log(`inside the gatAll ${req.query}`);

    Student.find().exec(function(err,students){
        if (err){
            console.log(`error finding studets ${err}`);
        }
        console.log(`found students ${students.length}`);
        res.status(200).json(students);

    });
};

module.exports.getOneStudent=function(req,res){
    console.log(`getting one student ${req.params.stuId}`);
    const studentId=req.params.stuId;
    Student.findById(studentId).exec(function(err,student){
        if(err){
            console.log(`error finding student by id ${err}`);
        }
        console.log(`found the student by id`);
        res.status(200).json(student);
    });
};