/**
 * Created by ganesh on 25/3/17.
 */
import "ValidationBase.ts"
import "LettorsOnlyValidator.ts"
import "ZipCodeValidator.ts"


// Some samples to try
let strings = ["Hello", "98052", "101"];

let validationList:{[s:string]:ValidationBase.StringValidation} ={};
validationList["Letter Only"] = new ValidationBase.LettorsOnlyValidator();
validationList["Zip Code"] = new ValidationBase.ZipCodeValidator();

for(let s  in strings){
    for(let validate in validationList){
        console.log("'" + s + "' " + (validationList[validate].isAcceptable(s) ? " matches " : " does not match ") + validate);
    }
}