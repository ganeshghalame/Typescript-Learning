/**
 * Created by ganesh on 25/3/17.
 */
let Greeters = (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeters;
})();

let greeterVar;
greeterVar = new Greeters("world");
console.log(greeterVar.greet());
