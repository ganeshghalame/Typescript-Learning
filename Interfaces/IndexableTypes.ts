/**
 * Created by ganesh on 24/3/17.
 // */
//describe types that we can "index into" like a[10], or ageMap["daniel"]. Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing

interface StringArray{
    [index:number]:string
}

let strArr :StringArray;
// strArr[1] = "Ganesh";
//Invalid
// strArr['test'] = 'test';
strArr = ["Bob", "Fred"];

let myStr:string = strArr[1];
console.log(myStr);

class Animal{
    name:string;
}

class Dog extends Animal{
    breed:string;
}
// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay{
    // [x:number]  : Animal;
    [y:string]  : Dog;
}

interface NumberDictionary{
    [index:string]:number;
    length:number; // ok, length is a number
    //name: string;      // error, the type of 'name' is not a subtype of the indexer
}

//make index signatures readonly in order to prevent assignment to their indices:

interface ReadOnlyStringArray{
    readonly [index:number]:string;
}
let myArr:ReadOnlyStringArray = ["Alice", "Bob"];
//Error:(45, 1) TS2542:Index signature in type 'ReadOnlyStringArray' only permits reading.
// myArr[1] = "asd";