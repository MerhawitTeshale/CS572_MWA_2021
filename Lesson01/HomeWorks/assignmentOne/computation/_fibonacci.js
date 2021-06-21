const fib=(number)=>{

    if (number<0){
        //deals with fib(-10)===fib(10)
        number=Math.abs(number);
    }
    if (number<2){
        return 1;
    } else{
        return fib(number-1)+fib(number-2);
    }
}

console.log(`the fibonacci of 25 is ${fib(25)}`);