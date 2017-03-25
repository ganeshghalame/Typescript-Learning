/**
 * Created by ganesh on 25/3/17.
 */
namespace Validator{
    export interface StringValidator{
        isAcceptable(s:string):boolean;
    }
    const lettersRegExp = /^[A-za-z]+$/;
    const numberRegExp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return lettersRegExp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return numberRegExp.test(s);
        }
    }
}


// Some samples to try
let stringList = ["Hello", "98052", "101"];

let validatorList:{[s:string]:Validator.StringValidator} = {};
validatorList["ZIP code"] = new Validator.ZipCodeValidator();
validatorList["Letters only"] = new Validator.LettersOnlyValidator();

// Show whether each string passed each validator

//show each string passed each validator
for(let s of stringList){
    for(let name in validatorList){
        let isMatch = validatorList[name].isAcceptable(s);
        console.log(` In NamespacedValidator '${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}
