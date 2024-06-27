console.log("JS Array Methods");

var numbers = [10, 20, 30, 40, 50];  //intializatin and declaration

/**  Add Element to the last of an array **/
numbers.push(60);
console.log(numbers);
/** Add Element to the First  **/
numbers.unshift(5);
console.log(numbers)

/**  I want to add to arrays   */

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x.concat(y);
console.log(z);

var a = [...x, ...y]; //using spread operator
console.log(a);


var companies = ["tcs", "infosys", "wipro", "ibm"];
//  0        1         2        3

console.log(companies.indexOf("ibm"));


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

console.log(employees);

var newEmployee = {
    id: 5,
    username: "Cassie",
    salary: 95000,
    dept: "NON-IT",
    country: "USA"
}


employees.push(newEmployee);