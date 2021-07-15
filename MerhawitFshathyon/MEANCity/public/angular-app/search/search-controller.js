angular.module('meanJobs').controller('SearchController',SearchController);

function SearchController(JobDataFactory){
    const vm=this;
   // vm.message="IT WORKS!!!!!"
    vm.search=function(){
        const search=vm.searchText;
        console.log(search);
    JobDataFactory.search(search).then(response=>{
            vm.jobs=response;
        });
    }
}