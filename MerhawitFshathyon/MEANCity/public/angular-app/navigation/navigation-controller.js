angular.module('meanCity').directive('cityNavigation',CityNavigation);

function CityNavigation(){
    return{
        restrict:"E",
        templateUrl:"angular-app/navigation/navigation.html"
    }
}