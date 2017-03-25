/**
 * Created by ganesh on 25/3/17.
 */
//In TypeScript, each member is public by default.

class AnimalClass{
    private name:string;
    public constructor(theName:string){
        this.name = theName;
    }
    public move(distanceInMeter:number=0){
        console.log(`${this.name} moved ${distanceInMeter}`);
    }
}
//name is private and not accessible
// let animal = new  AnimalClass("Hello").name;
let animal = new  AnimalClass("Hello").move();

class Person{
    protected name:string;
    constructor(theName:string){
        this.name = theName;
    }
}

class Employee extends Person{
    private department:string;
    constructor(name:string, department:string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I worked in ${this.department}`;
    }
}

let howard = new Employee("Ganesh", "Information Technology");
console.log(howard.getElevatorPitch());
// console.log(howard.name); //Error:(39, 20) TS2445:Property 'name' is protected and only accessible within class 'Person' and its subclasses.