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
/**
 * Created by ganesh on 25/3/17.
 */
var AnimalBase = (function () {
    function AnimalBase() {
    }
    AnimalBase.prototype.move = function () {
        console.log("Roaming the earth...");
    };
    return AnimalBase;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name :" + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Accounting Department meets Monday");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports");
    };
    return AccountingDepartment;
}(Department));
// let department:Department; //Ok to create the reference of abstract class
//Below statement will give error if tried to crete object of abstract class
// department =  new Department();
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
// method doesn't exist on declared abstract type
// department.generateReports();
//# sourceMappingURL=Abstract.js.map