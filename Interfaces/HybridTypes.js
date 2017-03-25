//Object that acts as both a function and an object, with additional properties
function getCounter() {
    var counter = function (start) { };
    counter.interval = 23;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 2;
//# sourceMappingURL=HybridTypes.js.map