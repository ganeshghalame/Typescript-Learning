/**
 * Created by ganesh on 25/3/17.
 */
var Opctopus = (function () {
    function Opctopus(legs) {
        this.legs = legs;
        this.numberOfLegs = 8;
        console.log(legs);
        this.numberOfLegs = legs;
        legs = 34;
        console.log("numberOfLegs:" + this.numberOfLegs);
    }
    return Opctopus;
}());
var oct = new Opctopus(3);
//# sourceMappingURL=ReadOnlyParameter.js.map