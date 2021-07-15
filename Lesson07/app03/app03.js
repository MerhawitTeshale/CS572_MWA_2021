
const delayMilliseconds=2000;
myCallback=function(){
    console.log(`this is the call back`);
}
const timeoutHolder=setTimeout(myCallback,delayMilliseconds);
clearTimeout(timeoutHolder);
console.log(`AppEnd`)