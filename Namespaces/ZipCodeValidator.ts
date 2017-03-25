/**
 * Created by ganesh on 25/3/17.
 */
///<reference path="ValidationBase.ts"/>
namespace ValidationBase{
    const numberRegExp = /^[0-9]/;
    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return numberRegExp.test(s) && s.length ===6;
        }
    }
}