console.log("Special Functions");

/**
 *  Normal Function,  Anonymous Functions, Arrow  Functions 
 * 
 */

/**
 * 
 *       function  <functionName>(){  }
 * 
 */

function getSalary() {
    return 18000;
}

// console.log(getSalary());

var getSalary = function () {  //anonymous function
    return 18000;
}

// console.log(getSalary())

var getSalary = () => 18000;

console.log(getSalary());


var x = () => console.log("x"); //

var y = x();

var z = () => console.log("Z");

y = z();

// y();

/***
 * High Order function is a function to pass function as an argument/paramter
 */


var add = (x, y) => x + y;

var sum = add(10, 20);

console.log(sum);


function ab(abcFunc) {
    abcFunc();
}


function abc() {
    console.log("abc");
}

ab(abc)


/****
 *  1.Array Methods
 *  2.String Methods
 *  3.Arrow Functions  /anonymous Functions
 *  4.HighOrder Functions
 *  5. Spread ,rest , object destructuring ,array destructuring
 */