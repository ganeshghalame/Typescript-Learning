/**
 * Created by ganesh on 25/3/17.
 */
///<reference path="ValidationBase.ts" />
namespace ValidationBase{
    const letterOnlyRegEx = /^[A-Za-z]+$/;
    export class LettorsOnlyValidator implements StringValidation{
        isAcceptable(s:string):boolean{
            return letterOnlyRegEx.test(s);
        }
    }
}