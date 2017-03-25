/**
 * Created by ganesh on 24/3/17.
 */
interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}

//Object that acts as both a function and an object, with additional properties

function getCounter():Counter {
    let counter = <Counter> function (start: number) {};
    counter.interval = 23;
    counter.reset = function () {};
    return counter;
}

let  c = getCounter();
c(10);
c.reset();
c.interval=2;