/**
 * Created by ganesh on 25/3/17.
 */

interface StringValidator{
    isAcceptable(s:string):boolean
}
let lettersRegExp = /^[A-Za-z]+$/;
let numberRegExp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator{
    isAcceptable(s:string){
        return lettersRegExp.test(s);
    }
}

class ZipCodeValidator implements StringValidator{
    isAcceptable(s:string){
        return numberRegExp.test(s) && s.length === 6;
    }
}

let strings = ["Hello", "414402", "101"];

let validators:{[s:string]:StringValidator} ={};
validators['Zip code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

//show each string passed each validator

for(let s of strings){
    for(let name in validators){
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}


