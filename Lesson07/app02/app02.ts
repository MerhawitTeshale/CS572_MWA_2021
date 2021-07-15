let x:number=5;
console.log(x);

let myName:String="Merahwit";

//tho typed ts allows you to use any which is the variable can have any type
let something :any;
something=5;
something="Merhawit";

//?
let otherthings:unknown;

let grades=[2.5,3.3];
// if("jack"!=["jack"]){

// }

// let myArray:[any]
let myArray =[2.5,"mer"]
let myOtherArray:(string|boolean)[];

enum Color{
    RED,GREEN=100,BLUE
};
let myColor:Color=Color.BLUE;
console.log("my color is ", myColor);

let course:String|number;
let courses:(String|number)[];

interface Course{
    title:string;
    capacity:number;
}
/// class
class OnCampuseCourse implements Course{
    title:string;
    capacity:number;
    static university:string;
    private instructor:string;
 
    constructor (title:string, capacity:number, instructor:string){
        this.title=title;
        this.capacity=capacity;
        this.instructor=instructor;
    }
}
let cs527:Course=new OnCampuseCourse("MWA",25,"Najeeb");

//extend --- overloading is not possible 
class Course1{
 title:string;
 capacity:number;
 constructor(title,capacity){
     this.title=title;
     this.capacity=capacity;
 }
}
class OnCampuseCourse1 extends Course1{
    private instructor:string;
    constructor(title,capacity,instructor){
        super(title,capacity);
        this.instructor=instructor;
    }
}