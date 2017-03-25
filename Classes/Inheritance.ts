/**
 * Created by ganesh on 25/3/17.
 */

class Animal{
    name:string;
    constructor(theName:string){
        console.log("In Animal Constructor");
        this.name = theName;
    }
    move(distanceInMeter:number=0){
        console.log(`${this.name} has moved ${distanceInMeter}m`);
    }
}

class Snake extends Animal{
    constructor(name:string){
        console.log("In Snake Constructor");
        super(name);
    }
    move(distanceInMeter:number=5){
        console.log("Slithering");
        super.move(distanceInMeter);
    }
}

class Horse extends Animal{
    constructor(name:string){
        console.log("In Horse Constructor");
        super(name);
    }
    move(distanceInMeter:number=5){
        console.log("Galloping");
        super.move(distanceInMeter);
    }
}


let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
