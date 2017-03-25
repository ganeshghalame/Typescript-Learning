/**
 * Created by ganesh on 25/3/17.
 */
class Opctopus{
    readonly numberOfLegs:number =8;
    constructor(readonly legs:number){
        console.log(legs);
        this.numberOfLegs =  legs;
        legs = 34;
        console.log("numberOfLegs:" + this.numberOfLegs);
    }
}

let oct = new Opctopus(3);