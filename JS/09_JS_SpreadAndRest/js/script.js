console.log("Spread And Rest Operator");

let numbers = [1, 2, 3, 4, 5, 6];

let x = [...numbers];

let y = [10, 20, 30];
let z = [...numbers, ...y];
// let z = numbers.concat(y);
console.log(z);

function getSalaries(...values) {
    console.log(values);
}

getSalaries({ id: 1, name: "sai" }, { id: 2, name: "raj" });

var m = [{ id: 1, name: "sai" }, { id: 2, name: "raj" }];

var n = [{ id: 3, name: "karan" }];

var o = [...m, ...n]
console.log(o)




// The let keyword
// The const keyword
// Arrow Functions
// The {a,b} = Operator
// The [a,b] = Operator
// The ... Operator
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array entries()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// Math.trunc
// Math.sign
// Math.cbrt
// Math.log2
// Math.log10
// Number.EPSILON
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER
// Number.isInteger()
// Number.isSafeInteger()
// New Global Methods
// JavaScript Modules