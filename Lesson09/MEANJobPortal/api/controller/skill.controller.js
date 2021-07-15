const mongooose=require('mongoose');
const Job=mongooose.model('Job');

//add function 
const _addSkill=(req,res,job)=>{
    //make it like an array
    job.skills.push(req.body.skills);

    job.save((err,job)=>{
        const response={
            status:201,
            message:job
        };
        if(err){
            response.status=500;
            response.message=err;
        }
        res.status(response.status).json(response.message);
    });
}


//get all skills
module.exports.getAllSkills=(req,res)=>{
    
    const jobId=req.params.id;
   Job.findById(jobId).select('skills').exec((err,job)=>{
    const response={
        status:200,
        message:job
    }

    if(err){
        response.status=500;
        response.message=err;
    } else if(!job){
        response.status=400;
        response.message={message:"Job not Found"};
    }

    res.status(response.status).json(response.message);
   }); 
};

//add skills
module.exports.addSkill=(req,res)=>{
    const jobId=req.params.id;
   Job.findById(jobId).select('skills').exec((err,job)=>{
    const response={
        status:201,
        message:job
    }

    if(err){
        response.status=500;
        response.message=err;
    } else if(!job){
        response.status=400;
        response.message={message:"Job not Found"};
    } 
    if(job){
        _addSkill(req,res,job);
    }else{
        res.status(response.status).json(response.message);
    }


});

};
//delete 
module.exports.delteSkill=(req,res)=>{
    const jobId=req.params.id;
   Job.findById(jobId).select('skills').exec((err,job)=>{
    const response={
        status:204,
        message:job
    }

    if(err){
        response.status=500;
        response.message=err;
    } else if(!job){
        response.status=400;
        response.message={message:"Job not Found"};
    }
   if(response.status!==204){
       res.status(response.status).json(response.message);
   } else{
       if(!job.skills){
           response.status=400;
           response.message={message:"Job Skills not found"};
       }
       const skillId=req.params.skillId;
       job.skills.id(skillId).remove();
       job.save((err,job)=>{
        if(err){
            response.status=500;
            response.message=err;
        } else{
           
            response.message=job;
        }
        res.status(response.status).json(response.message);
       });
   }
});
}

//

