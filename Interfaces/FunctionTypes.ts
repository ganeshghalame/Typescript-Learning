/**
 * Created by ganesh on 24/3/17.
 */
//function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type
interface SearchFunction{
    (source:string, subStr:string):boolean;
}

let mySearch:SearchFunction;

mySearch = function (source:string, subStr:string) {
    let result = source.search(subStr);
    return result > -1;
};

let diffParamNameFunc :SearchFunction;

//function param names are different
diffParamNameFunc = function(src:string, sub:string) :boolean{
    let result =  src.search(sub);
    return result > -1;
};

//  Function parameters without type

let withoutFuncParamType :SearchFunction;

withoutFuncParamType = function(src, sub){
    return src.search(sub) > -1;
};

