
/**
 * Created by ganesh on 25/3/17.
 */
class EmployeeClass{
    name:string;
}

let emp  = new EmployeeClass();
// allowing to randomly set name directly is pretty handy
emp.name = "Ganesh Ghalame";
// Get Name
if(emp.name){
    console.log("Employee Name:" + emp.name);
}


// Check password before allowing to set

let password = 'returnempty';
class TestGetSet{
    private full_name:string;
    get fullName():string{
        return this.full_name;
    }
    set fullName(name:string){
        if(password && password === "returnempty"){
            this.full_name = name;
        }else{
            console.log("Un authorized to set value");
        }
    }
}

let test = new TestGetSet();
// undefined
console.log(test.fullName);
test.fullName = "Ganesh Ghaleme";
console.log(test.fullName);