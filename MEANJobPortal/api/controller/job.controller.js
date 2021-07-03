const mongoose = require('mongoose');
const Job = mongoose.model("Job");


//get all jobs --check the pagination (count)
module.exports.getAllJobs = (req, res) => {
    console.log(`GET request recieved for all jobs`);
    //res.send("request recieved");
    const response = {
        status: 200,
        message: {}
    }
    //pagination
    const defaultCount = 5;
    const maxCount = 8;

    let offset = 0;
    let count = defaultCount;

    //accept user input if it exists 
    if (req.query && req.query.offset) {
        console.log(`the offset is ${req.query.offset}`);
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        console.log(`the count is ${req.query.count}`);
        count = parseInt(req.query.count);
        console.log(`count is 2 ${count}`)
    }
    //limit check
    if (count-offset > maxCount) {
        console.log(`limit for count is exxeeced`);
        response.status = 400;
        response.message = { message: `count exceed count of ${maxCount}` };
        res.status(response.status).json(response.message);
        return;
    }
    //type checking
    if (isNaN(offset) || isNaN(count)) {
        response.status = 400;
        response.message = { message: "count and offset need to be a number" };
    }
    
    Job.find().skip(offset).limit(count).exec((err, jobs) => {
        const response = {
            status: 200,
            message: jobs
        }
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!jobs) {
            response.status = 400
            response.message = { message: "Jobs created is not found" };
        }
        res.status(response.status).json(response.message);
    });
};


//get one job
module.exports.getOneJob = (req, res) => {
    console.log(`get request for one game recieved`);
    const jobId = req.params.id;
    if (!jobId.length == 24) {
        console.log(`job id not valid`);
        res.status(400).json({ message: "jobs id not valid" });
    }
    Job.findById(jobId).exec((err, job) => {
        const response = {
            status: 200,
            message: job
        };
        if (err) {
            console.log(`error occured searching for a game`);
            response.status = 500;
            response.message = err;
        } else if (!job) {
            console.log(`job is not found`);
            response.status = 400;
            response.message = { message: "job not found by ID" };
        }
        res.status(response.status).json(response.message);

    });
};

//add one job 
module.exports.jobsAddOne = (req, res) => {
    console.log(`Post request for adding a job recieved`);
    console.log(req.body);
    const newJob = {
        title: req.body.title,
        salary: parseFloat(req.body.salary),
        description: req.body.description,
        experience: req.body.experience,
        //how to add skills
        skills:req.body.skills,
        address: req.body.address
        // location:{
        //     address:req.body.address,
        //     coordinates:[req.body.lat, req.body.lng]
        // }
    }

    Job.create(newJob, (err, job) => {
        const response = {
            status: 200,
            message: job
        }
        if (err) {
            console.log(`error occure while saving new job`);
            response.status = 500;
            response.message = err
        } else if (!job) {
            response.status = 400;
            response.message = { message: "Job was not created" };

        }
        res.status(response.status).json(response.message);
    });
};

//delete one job
module.exports.deleteJob = (req, res) => {
    console.log(`request for deleting a job is recieved`);
    const jobId = req.params.id;
    console.log(`job id is ${jobId}`);

    if (jobId.length !== 24) {
        console.log(`id length is not valid ${jobId.length}`);
        res.status(400).json({ message: "ID is not valid" });
    }
    Job.findByIdAndDelete(jobId).exec((err, job) => {
        const response = {
            status: 201,
            message: job
        };
        if (err) {
            console.log(`error occured deleting a job`);
            response.status = 500;
            response.message = err;
        } else if (!job) {
            response.status(400);
            response.message = { message: "job to be deleted is not found" };
        }
        res.status(response.status).json(response.message);
    });
};

//full edit 
module.exports.fullUpdateJob = (req, res) => {
    console.log(`Put request recieved for update`);
    const jobId = req.params.id;
    console.log(`job id is ${jobId}`);

    if (jobId.length != 24) {
        console.log(`job Id is not valid length`);
        res.status(400).json({ message: "job Id not valid" });
    }
    Job.findById(jobId).exec((err, job) => {
        const response = {
            status: 201,
            message: job
        };

        if (err) {
            console.log(`error occured while update`);
            response.status = 500;
            response.message = err;
        } else if (!job) {
            response.status = 400;
            response.message = { message: "job not found" }
        } else {
            //update
            job.title = req.body.title;
            job.salary = parseFloat(req.body.salary);
            job.description = req.body.description;
            job.exprience = req.body.exprience;
            job.skills = req.body.skills;
            job.address = req.body.address;

            //save job
            job.save((err, updatedJob) => {
                if (err) {
                    response.status = 500;
                    response.message = err;
                } else if (!updatedJob) {
                    response.status = 400;
                    response.message = { message: "updated job is not found" };
                } else {
                    response.message = updatedJob;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};

//update
module.exports.PartialUpdateJob = (req, res) => {
    console.log(`Patch request recieved for update`);
    const jobId = req.params.id;
    console.log(`job id is ${jobId}`);

    if (jobId.length != 24) {
        console.log(`job Id is not valid length`);
        res.status(400).json({ message: "job Id not valid" });
    }
    Job.findById(jobId).exec((err, job) => {
        const response = {
            status: 201,
            message: job
        };

        if (err) {
            console.log(`error occured while update`);
            response.status = 500;
            response.message = err;
        } else if (!job) {
            response.status = 400;
            response.message = { message: "job not found" }
        } else {
            //update
            if (req.body.title) {
                job.title = req.body.title;
            }
            if (req.body.salary) {
                job.salary = parseFloat(req.body.salary);
            }
            if (req.body.description) {
                job.description = req.body.description;
            }
            if (req.body.exprience) {
                job.exprience = req.body.exprience;
            }
            if (req.body.skills) {
                job.skills = req.body.skills;
            }
            if (req.body.address) {
                job.address = req.body.address;
            }

            //save job
            job.save((err, updatedJob) => {
                if (err) {
                    response.status = 500;
                    response.message = err;
                } else if (!updatedJob) {
                    response.status = 400;
                    response.message = { message: "updated job is not found" };
                } else {
                    response.message = updatedJob;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};