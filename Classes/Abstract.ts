/**
 * Created by ganesh on 25/3/17.
 */
abstract class AnimalBase{
    //abstract method Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes
    abstract makeSound():void;
    move(){
        console.log("Roaming the earth...");
    }
}

abstract class Department{
    constructor(public name:string){}
    printName():void{
        console.log(`Department name :${this.name}`);
    }
    abstract printMeeting():void;
}

class AccountingDepartment extends Department{
    constructor(){
        super("Accounting and Auditing");
    }
    printMeeting():void{
        console.log("Accounting Department meets Monday");
    }

    generateReports():void{
        console.log("Generating accounting reports");
    }
}

// let department:Department; //Ok to create the reference of abstract class
//Below statement will give error if tried to crete object of abstract class
// department =  new Department();
let department = new AccountingDepartment();
department.printName();
department.printMeeting();
// method doesn't exist on declared abstract type
// department.generateReports();
