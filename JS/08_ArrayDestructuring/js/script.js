console.log("Array Destructuring");


var employees = [
    {
        id: 1,
        username: "John",
        salary: 18000,
        dept: "IT",
        country: "IND"
    },
    {
        id: 2,
        username: "virat",
        salary: 28000,
        dept: "FINANCE",
        country: "IND"
    },
    {
        id: 3,
        username: "Goutham",
        salary: 48000,
        dept: "HR",
        country: "AUS"
    },
    {
        id: 4,
        username: "Jones",
        salary: 90000,
        dept: "IT",
        country: "USA"
    }
]

/**
 *  1.Traditional FOR
 *  2.FOR EACH
 *  3.FOR OF
 *  4.FOR IN 
 */

employees.forEach(emp => {
    const { id, username, salary, dept, country } = emp;
    if (dept == "IT") {
        console.log(emp);
    }
});

let x = [1, 2, 3];

let [a, b, c] = x; //array destrucing

console.log(x);
console.log(a);
console.log(b);
console.log(c);

let y = ["Hello", function hello() { }];

let [hello, func] = y;

console.log(hello);
console.log(func);

