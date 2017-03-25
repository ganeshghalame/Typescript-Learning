/**
 * Created by ganesh on 24/3/17.
 */

//enforcing that a class meets a particular contract.
interface ClockInterface{
    currentDate:Date;
}

class Clock implements ClockInterface{
    currentDate:Date;
    constructor(h:number, m:number){};
}

//interface that are implemented in the class

interface Clock{
    currentDate:Date;
    setTime(d:Date);
}

class ClockImplementor implements Clock{
    currentDate:Date;
    setTime(a:Date){
        return this.currentDate;
    }
}

//Difference between the static and instance sides of classes
interface ClockConstructor{
    new(hour:number, minute:number):ClockInter;
}
interface ClockInter{
    tick();
}

function createClock(ctor:ClockConstructor, hour:number, minute:number):ClockInter{
    return new ctor(hour, minute);
}

