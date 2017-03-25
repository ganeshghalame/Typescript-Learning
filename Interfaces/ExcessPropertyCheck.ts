/**
 * Created by ganesh on 24/3/17.
 */
interface SquareConfig{
    color?:string,
    width?:number;
    [propName:string]:any //we're saying a SquareConfig can have any number of properties, and as long as they aren't color or width, their types don't matter
}

function createSquare(config:SquareConfig):{color:"White",width:20}{
 return ;
}
//Check spelling of color its colour
let mySquareVar = createSquare({colour:"yellow", width:200} as SquareConfig);

// Added opacity type can be anything
let testSquare = createSquare({colour:"red",width:20, opacity:300});