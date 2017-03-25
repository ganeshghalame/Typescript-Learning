/**
 * Created by ganesh on 25/3/17.
 */
var EmployeeClass = (function () {
    function EmployeeClass() {
    }
    return EmployeeClass;
}());
var emp = new EmployeeClass();
// allowing to randomly set name directly is pretty handy
emp.name = "Ganesh Ghalame";
// Get Name
if (emp.name) {
    console.log("Employee Name:" + emp.name);
}
// Check password before allowing to set
var password = 'returnempty';
var TestGetSet = (function () {
    function TestGetSet() {
    }
    Object.defineProperty(TestGetSet.prototype, "fullName", {
        get: function () {
            return this.full_name;
        },
        set: function (name) {
            if (password && password === "returnempty") {
                this.full_name = name;
            }
            else {
                console.log("Un authorized to set value");
            }
        },
        enumerable: true,
        configurable: true
    });
    return TestGetSet;
}());
var test = new TestGetSet();
// undefined
console.log(test.fullName);
test.fullName = "Ganesh Ghaleme";
console.log(test.fullName);
//# sourceMappingURL=Accessors.js.map