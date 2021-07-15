angular.module('meanJobs').directive('jobsNavigation',JobsNavigation);

function JobsNavigation(){
    return{
        restrict:"E",
        templateUrl:"angular-app/navigation/navigation.html"
    }
}