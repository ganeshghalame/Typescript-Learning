/**
 * Created by ganesh on 25/3/17.
 */
//In TypeScript, each member is public by default.
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
var AnimalClass = (function () {
    function AnimalClass(theName) {
        this.name = theName;
    }
    AnimalClass.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " moved " + distanceInMeter);
    };
    return AnimalClass;
}());
//name is private and not accessible
// let animal = new  AnimalClass("Hello").name;
var animal = new AnimalClass("Hello").move();
var Person = (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I worked in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee("Ganesh", "Information Technology");
console.log(howard.getElevatorPitch());
// console.log(howard.name); //Error:(39, 20) TS2445:Property 'name' is protected and only accessible within class 'Person' and its subclasses. 
//# sourceMappingURL=Modifiers.js.map