/**
 * Created by ganesh on 24/3/17.
 */

class Greeter{
    greeter:string;
    constructor(message:string){
        this.greeter = message;
    }
    greet():string{
        return "Hello " +this.greeter;
    }
}

let greeter = new Greeter("Ganesh");
greeter.greet();