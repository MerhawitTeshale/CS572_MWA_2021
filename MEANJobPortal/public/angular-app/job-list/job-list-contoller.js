
angular.module('meanJobs').controller('JobListController',JobListController);
        let offset=0;   
        let count=3;
        let nextCount=3;
function JobListController(JobDataFactory){
    const vm=this;
    vm.showButton=true;
    vm.title="Jobs Available";
    vm.backButton=false;
    vm.nextButton=true;
    JobDataFactory.getAll().then(response=>{
        vm.jobs=response;
    });


    
    vm.addButton=function(){
        vm.showForm=true;
        vm.showButton=false;   
    }
    vm.addJob=function (){
        const newJob={
            title:vm.newJobTitle,
            salary:vm.newJobSalary,
            description:vm.newJobDescription,
            experience:vm.newJobExperience,
            skills:vm.newJobSkills,
            address:vm.newJobAddress
        } 
        if(vm.jobForm.$valid){
            JobDataFactory.addOne(newJob).then(response=>{
                console.log(`job is saved ${response}`);
                vm.showForm=false;
            }).catch(error=>{
                console.log(`error ${error}`);
            });
            vm.message="Job Saved Successfully! Thank you";
            vm.showButton=true; 
        }
    }

    vm.next= function (){
        offset=count;
        count+=nextCount
        if(offset!==0){
            vm.backButton=true;
        }
        JobDataFactory.nextPage(offset,count).then(response=>{
           if(response.length==0){
            vm.nextButton=false;
           } else{
            vm.jobs=response;
           }
           
            console.log(response);
        });
    }
    vm.back= function (){
        
        if(offset!==0){
            vm.backButton=true;
        }
       
        if(count<0 || count===0){
            count=nextCount;
        } else{
        offset=count-nextCount;
        count-=nextCount 
    }
        JobDataFactory.nextPage(offset,count).then(response=>{
            if(response.length!==0){
                vm.nextButton=true;
            }else{
                vm.jobs=response;
            }
            
            
        });
    }
    
}

