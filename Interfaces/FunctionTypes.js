var mySearch;
mySearch = function (source, subStr) {
    var result = source.search(subStr);
    return result > -1;
};
var diffParamNameFunc;
//function param names are different
diffParamNameFunc = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
//  Function parameters without type
var withoutFuncParamType;
withoutFuncParamType = function (src, sub) {
    return src.search(sub) > -1;
};
//# sourceMappingURL=FunctionTypes.js.map