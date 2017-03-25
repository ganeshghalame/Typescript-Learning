/**
 * Created by ganesh on 25/3/17.
 */
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
var Animal = (function () {
    function Animal(theName) {
        console.log("In Animal Constructor");
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " has moved " + distanceInMeter + "m");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = this;
        console.log("In Snake Constructor");
        _this = _super.call(this, name) || this;
        return _this;
    }
    Snake.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Slithering");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        var _this = this;
        console.log("In Horse Constructor");
        _this = _super.call(this, name) || this;
        return _this;
    }
    Horse.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Galloping");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//# sourceMappingURL=Inheritance.js.map