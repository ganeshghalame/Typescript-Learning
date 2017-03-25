/**
 * Created by ganesh on 24/3/17.
 */
interface SquareConfig{
    width?:number,
    color?:string
}

function creteSquare(config:SquareConfig):{color:string, area:number}{
    let newSquare = {color:"white", area:10};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = creteSquare({color:"black"});