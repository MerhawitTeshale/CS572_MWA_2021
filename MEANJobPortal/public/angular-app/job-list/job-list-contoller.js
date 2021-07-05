
angular.module('meanJobs').controller('JobListController', JobListController);
const defaultOffset = 0;
const nextCount = 3;
let offset = defaultOffset;
let count = nextCount;


function JobListController(JobDataFactory) {
    const vm = this;
    vm.action = "save";
    vm.showButton = true;
    vm.showForm = false;
    vm.title = "Jobs Available";
    vm.backButton = false;
    vm.nextButton = true;



    JobDataFactory.getAll().then(response => {
        vm.jobs = response;
    });



    vm.addButton = function () {
        vm.showForm = true;
        vm.showButton = false;
    }
    vm.addJob = function () {
        const newJob = {
            title: vm.newJobTitle,
            salary: vm.newJobSalary,
            description: vm.newJobDescription,
            experience: vm.newJobExperience,
            skills: vm.newJobSkills,
            address: vm.newJobAddress
        };
        if (vm.action === "save") {
            if (vm.jobForm.$valid) {
                JobDataFactory.addOne(newJob).then(response => {
                    console.log(`job is saved ${response}`);
                    vm.showForm = false;
                }).catch(error => {
                    console.log(`error ${error}`);
                });
                vm.message = "Job Saved Successfully! Thank you";
                vm.showButton = true;
                vm.showForm = false;
                vm.newJobTitle = "";
                vm.newJobSalary = "";
                vm.newJobDescription = "";
                vm.newJobExperience = "";
                vm.newJobSkills = "";
                vm.newJobAddress = "";
            }
        } else {
            if (vm.jobForm.$valid) {
                JobDataFactory.partialUpdate(vm.id, newJob).then(response => {
                    console.log(`job is saved ${response}`);
                    vm.showForm = false;
                }).catch(error => {
                    console.log(`error ${error}`);
                });
                vm.message = "Job updated Successfully! Thank you";
                vm.showButton = true;
                vm.showForm = false;
                vm.newJobTitle = "";
                vm.newJobSalary = "";
                vm.newJobDescription = "";
                vm.newJobExperience = "";
                vm.newJobSkills = "";
                vm.newJobAddress = "";
            }
        }
    }

    vm.next = function () {
        if (offset !== 0) {
            vm.backButton = true;
        }
        JobDataFactory.nextPage(offset, count).then(response => {
            if (response.length == 0) {
                vm.nextButton = false;
            } else {
                vm.jobs = response;
            }
            if (count < 0 || count === 0) {
                count = nextCount;
            }
            if (offset < 0) {
                offset = defaultOffset;
            } else {
                offset = count;
                count += nextCount
            }

            //console.log(response);
        });
    }
    vm.back = function () {

        if (offset === 0) {
            vm.backButton = false;
        }
        if (count < 0 || count === 0) {
            count = nextCount;
        }
        if (offset < 0) {
            offset = defaultOffset;
        }
        else {
            //logic is missing here 
            count -= offset;
            offset -= nextCount;

        }
        JobDataFactory.nextPage(offset, count).then(response => {
            if (response.length !== 0) {
                vm.nextButton = true;
            }
            vm.jobs = response;


        });
    }
    vm.initEdit = function (job) {
        console.log(job);
        vm.newJobTitle = job.title;
        vm.newJobSalary = job.salary;
        vm.newJobDescription = job.description;
        vm.newJobExperience = job.experience;
        vm.newJobSkills = job.skills;
        // if(job.location){
        //     vm.country = job.location.country;
        //     vm.city = job.location.city;
        //     vm.state = job.location.state;
        // }
        vm.id = job._id;
        vm.action = "edit"
    }

}

