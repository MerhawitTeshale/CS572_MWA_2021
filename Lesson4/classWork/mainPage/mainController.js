angular.module("myProperApp").controller("MainController",MainController);

function MainController($http){
    const vm=this;
    $http.get("https://collectionapi.metmuseum.org/public/collection/v1/departments")
        .then(function(response){
        console.log(response.data.departments);
        vm.book=response.data.departments;
    });
}