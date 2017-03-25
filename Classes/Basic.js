/**
 * Created by ganesh on 24/3/17.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeter = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeter;
    };
    return Greeter;
}());
var greeter = new Greeter("Ganesh");
greeter.greet();
//# sourceMappingURL=Basic.js.map