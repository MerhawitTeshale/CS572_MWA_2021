angular.module('myProperApp',['ngRoute']).config(config);

// function config($routeProvider){
//     $routeProvider.when("/", {
//       template:"<h1> this is the home page</h1>"  
//     }).when("/about",{
//         template:"<h1> this is the about page</h1>"
//     })
// }

function config($routeProvider){
    $routeProvider.when("/", {
      templateUrl:"template/main.html",
      controller:"myMainController",
      contollerAs:"mainCtrl"  
    }).when("/about",{
        templateUrl:"template/about.html"
    }).otherwise({
        redirectTo:"/"
    })
}