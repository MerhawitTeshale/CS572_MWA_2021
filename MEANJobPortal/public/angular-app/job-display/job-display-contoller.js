angular.module('meanJobs').controller('JobsController',JobsController);


function JobsController(JobDataFactory,$routeParams){
    const vm=this;
    const id=$routeParams.id;

    vm.showDetaile=true;
    //get one job
    JobDataFactory.getOne(id).then(response=>{
        vm.job=response;
    });

    //edit 



    //change

    //delete one job
    vm.deleteJob= function(){
        JobDataFactory.delete(id).then(response=>{
            console.log(`job is deleted`);
            vm.message="Job is Deleted!"
            vm.showDetaile=false;
        });
    }
}