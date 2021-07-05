angular.module('meanJobs').controller('JobsController',JobsController);


function JobsController(JobDataFactory,$routeParams){
    const vm=this;
    const id=$routeParams.id;
    vm.showEditForm=true;
    vm.showDetaile=true;
    //get one job
    JobDataFactory.getOne(id).then(response=>{
        vm.job=response;
    });


    //delete one job
    vm.deleteJob= function(){
        JobDataFactory.delete(id).then(response=>{
            console.log(`job is deleted`);
            vm.message="Job is Deleted!"
            vm.showDetaile=false;
        });
    }

}