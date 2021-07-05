angular.module('meanCity',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"angular-app/city-list/city-list.html",
        controller:"CityListController",
        controllerAs:"vm"
    }).when('/cities/:id',{
        templateUrl:"angular-app/city-display/city.html",
        controller:'CityController',
        controllerAs:'vm'
    })
    // .when('/jobs/?search=search',{
    //     templateUrl:"angular-app/job-display/job.html",
    //     controller:'JobsController',
    //     controllerAs:'vm'
    // })
    // 
    .otherwise({
        redirectTo:'/'
    });
}