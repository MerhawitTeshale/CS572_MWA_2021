angular.module('meanJobs',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'angular-app/welcome/welcome.html'
    }).when('/jobs',{
        templateUrl:"angular-app/job-list/job-list.html",
        controller:"JobListController",
        controllerAs:"vm"
    }).when('/jobs/:id',{
        templateUrl:"angular-app/job-display/job.html",
        controller:'JobsController',
        controllerAs:'vm'
    }).otherwise({
        redirectTo:'/'
    });
}