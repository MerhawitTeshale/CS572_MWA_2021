angular.module("myProperApp").filter("order",NumberOrder);

function NumberOrder(){
    return function(number){
        if (number && !isNaN(number)){
            const digit=number%10;
            let suffix ="th";
            switch(digit){
                case 1 :
                suffix="st"
                break;
                case 2 :
                suffix="nd"
                break;
                case 3 :
                suffix="rd"
                break;
            }
            return number+suffix;
        }
//this will be helpful if the thing was not a number and we still want to print what was there already
        return number
    }
}