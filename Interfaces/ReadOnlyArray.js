/**
 * Created by ganesh on 24/3/17.
 */
var a = [1, 2, 3, 4];
var readOnlyArr = a;
//Error when assigning value to readonly array
a[1] = 20;
//Error:(8, 13) TS2339:Property 'push' does not exist on type 'ReadonlyArray<number>'.
// readOnlyArr.push(5);
//Error:(10, 2) TS2542:Index signature in type 'ReadonlyArray<number>' only permits reading.
// readOnlyArr[0] = 20;
console.log(a.length);
console.log(readOnlyArr.length);
//Error:(14, 1) TS2322:Type 'ReadonlyArray<number>' is not assignable to type 'number[]'.Property 'push' is missing in type 'ReadonlyArray<number>'.
// a = readOnlyArr; // error even assigning the entire ReadonlyArray back to a normal array is illegal
//override it with a type assertion
a = readOnlyArr;
//# sourceMappingURL=ReadOnlyArray.js.map