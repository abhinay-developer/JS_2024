var x = 10; //function scope

let y = 10; //block scope

const xyz = 10; //block scope  we cannot reassign xyz=90;


//datatypes

// number,boolean,string,object

let age = 45;
let email = "john@gmail.com";
let isQuafiled = true; // true or false
let films = ["RRR", "KALKI", "OYE"]; //object
let employee = {   // object
    id: 1,
    name: "Raj",
    dept: "IT",
    salary: 18000
};
let students = [
    {
        studentId: 101,
        collegeName: "CBIT",
        age: 19,
        course: "CSE"
    },
    {
        studentId: 102,
        collegeName: "MGIT",
        age: 21,
        course: "ECE"
    }
];



//array Methods


let members = [
    {
        id: 101,
        name: "saikumar",
        age: 25,
        yearly: 18000
    },
    {
        id: 102,
        name: "rajkumar",
        age: 45,
        yearly: 18000
    },
    {
        id: 103,
        name: "john",
        age: 37,
        yearly: 18000
    }

];

members.forEach((member) => {
    if (member.age <= 25) {
        calculateDiscount(member.yearly);//18000
    }
});

function calculateDiscount(yearlyPrice) {//18000
    let discountPrice = (yearlyPrice * 10) / 100;
    console.log(discountPrice);//1800
}

let newMember = {
    id: 104,
    name: "Gorge",
    age: 24,
    yearly: 78000
};

members.push(newMember);
console.log(members);

/***
 * 
 * 
 * 
 */

function addTwoNumbers(x, y) {
    const addition = x + y;
    console.log(addition);
}

addTwoNumbers(10, 20);


const addNumbers = function (x, y) {
    const addition = x + y;
    console.log(addition);
}

addNumbers(10, 20);


const addMyNumbers = (x, y) => x + y;

console.log(addMyNumbers(10, 20))


let names = ["sai", "saikumar", "kiran", "raj", "rohit", "kumar", "nani", "Shekar"];


let namesWithLetterS = [];

const map = new Map();

// {key:1,value:"sai"}
let counter = 0;
names.forEach((name) => {
    if (name.toLocaleLowerCase().startsWith("s")) {
        map.set("s", counter++);
        namesWithLetterS.push(name);
    }
})
//map ,set ,function,arrowfunction,js modules,events

console.log(map)

console.log(namesWithLetterS)







//arrays

let arr = [10, 20, 30, 40, 50];

let iplTeams = ["KKR", "RR", "CSK", "RCB"];

let bikes = [
    {
        id: 101,
        bikeName: "ACTIVA",
        bikeColor: "RED"
    },
    {
        id: 102,
        bikeName: "FZ",
        bikeColor: "BLACK"
    }
];

