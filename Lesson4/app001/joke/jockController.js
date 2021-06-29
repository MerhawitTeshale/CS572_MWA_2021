angular.module("myProperApp").controller("JokeController",JokeController);

function JokeController($http, $routeParams){
    const vm=this;
    const jokeType=$routeParams.jokeType;
    $http.get("http:")
                .then(function(response){
                    vm.joke=response.data;
                })
}