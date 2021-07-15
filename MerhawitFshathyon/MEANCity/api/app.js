angular.module('meanJobs',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/',{

    }).otherwise({
        redirectTo:'/'
    });
}