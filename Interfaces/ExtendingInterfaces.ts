/**
 * Created by ganesh on 24/3/17.
 */

interface Shape{
    color:string;
}

interface PenStroke{
    penWidth:number;
}
interface Square extends Shape, PenStroke{
    sideLength:number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 2;
square.penWidth = 23;