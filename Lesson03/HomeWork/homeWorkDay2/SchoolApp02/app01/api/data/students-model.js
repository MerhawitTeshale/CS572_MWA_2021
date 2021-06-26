const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({
    course_code:String,
    course_name:String
});
const studentSchema=mongoose.Schema({
    stu_name: {
        type: String,
        require:true
    },
    GPA:Number,

    course:[courseSchema]
    
});

mongoose.model('Student',studentSchema,'Students');