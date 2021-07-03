angular.module('meanJobs').controller('SearchController',SearchController);

function SearchController(JobDataFactory){
    const vm=this;
    vm.message="IT WORKS!!!!!"
    vm.search=function(){
    JobDataFactory.getAll().then(response=>{
            vm.jobs=response;
        });
    }
}