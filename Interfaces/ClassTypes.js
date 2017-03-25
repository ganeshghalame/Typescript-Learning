/**
 * Created by ganesh on 24/3/17.
 */
var Clock = (function () {
    function Clock(h, m) {
    }
    ;
    return Clock;
}());
var ClockImplementor = (function () {
    function ClockImplementor() {
    }
    ClockImplementor.prototype.setTime = function (a) {
        return this.currentDate;
    };
    return ClockImplementor;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
//# sourceMappingURL=ClassTypes.js.map