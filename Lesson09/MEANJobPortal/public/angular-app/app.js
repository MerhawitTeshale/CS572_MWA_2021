angular.module('meanJobs',['ngRoute', 'angular-jwt']).config(config).run(run);

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
    })
    // .when('/jobs/?search=search',{
    //     templateUrl:"angular-app/job-display/job.html",
    //     controller:'JobsController',
    //     controllerAs:'vm'
    // })
    .when('/jobs/:id/edit',{
        templateUrl:"angular-app/job-edit/job-edit.html",
        controller:'JobsController',
        controllerAs:'vm'
    }).when('/register',{
        templateUrl:"angular-app/register/register.html",
        controller:'RegisterController',
        controllerAs:'vm'
}).otherwise({
        redirectTo:'/'
    });
}

function run($rootScope,$location, AuthFactroy){
    $rootScope.$on("$routeChangeStart", function(event,nextRoute,currentRoute){
        if(nextRoute.access!==undefined && nextRoute.access.restricted
             && !AuthFactroy.auth){
            event.preventDefault();//do not go to the path
            $location.path('/');//instead send back to home
        }
    console.log(`i am here...... in run`);
        });
}