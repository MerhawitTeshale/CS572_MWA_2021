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
module.exports.FullUpdateStudent=function(req,res){
    console.log(`getting one student ${req.params.stuId}`);
    const studentId=req.params.stuId;
    Student.findById(studentId).exec(function(err,student){
        if(err){
            console.log(`error finding student by id ${err}`);
        }
        student.stu_name=req.body.name;
        student.GPA=req.body.gpa;
        student.course.push(req.body.course);

        student.save(function(err,updatedStudent){
            if(err){
                console.log(`error found updating student${err}`)
            }
            res.status(201).json(updatedStudent);
        });
    });
};
module.exports.PartialUpdateStudent=function(req,res){
    console.log(`getting one student ${req.params.stuId}`);
    const studentId=req.params.stuId;
    Student.findById(studentId).exec(function(err,student){
        if(err){
            console.log(`error finding student by id ${err}`);
        }
        else{
            if(req.body.name){
                student.stu_name=req.body.name;   
            }
            if(req.body.gpa){
                student.GPA=req.body.gpa;
            }
            if(req.body.course){
                student.course.push(req.body.course);
            }
            
            student.save(function(err,updatedStudent){
                if(err){
                    console.log(`error found updating student${err}`)
                }
                res.status(201).json(updatedStudent);
            });
        
        }
    });
};
module.exports.AddOneStudent=function(req,res){
    console.log(`adding student`);

    const newStudent=req.body;
    console.log(newStudent);
    Student.create(newStudent, function (err, studnet) {
        const response = {
            status: 200,
            message: studnet
        }
        if (err) {
            console.log(`erro registering student ${err}`);
            response.status = 500;
            response.message = err;
        } else if (!studnet) {
            response.status = 400;
            response.message = { message: "student not found" };
        }
        res.status(response.status).json(response.message);
    });
};
module.exports.DeleteOneStudent=function(req,res){
    const stuId = req.params.stuId;
    console.log(stuId.length);

    Student.findByIdAndRemove(stuId).exec(function (err, deletedStudent) {
        const response = {
            status: 204,
            message: deletedStudent
        }

        if (err) {
            console.log(`erro deleting student ${err}`);
            response.status = 500;
            response.message = err;
        } else if (!deletedStudent) {
            response.status = 404;
            response.message = { message: "student to be deleted not found" };
        }
        console.log(`deleted`);
        res.status(response.status).json(response.message);

    });

};