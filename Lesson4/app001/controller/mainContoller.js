angular.module("myProperApp").controller("myMainController",myMainController);

function myMainController($http){
 const vm=this;
 vm.name="Merhawit";
 $http.get("http")
        .then(function (){
      
        });
}