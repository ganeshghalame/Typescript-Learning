/**
 * Created by ganesh on 24/3/17.
 // */
//describe types that we can "index into" like a[10], or ageMap["daniel"]. Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var strArr;
// strArr[1] = "Ganesh";
//Invalid
// strArr['test'] = 'test';
strArr = ["Bob", "Fred"];
var myStr = strArr[1];
console.log(myStr);
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArr = ["Alice", "Bob"];
//Error:(45, 1) TS2542:Index signature in type 'ReadOnlyStringArray' only permits reading.
// myArr[1] = "asd"; 
//# sourceMappingURL=IndexableTypes.js.map