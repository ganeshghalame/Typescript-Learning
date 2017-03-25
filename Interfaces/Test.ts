/**
 * Created by ganesh on 24/3/17.
 */
interface labelledValue{
    label:string,
    size:number
}

function printLabel(labelObj:labelledValue){
    console.log(labelObj.label);
}

let myObj =  {size:10, label:"Testing"};
printLabel(myObj);