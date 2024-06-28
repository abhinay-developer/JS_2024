console.log("JS Arrays");

var numbers = [9, 2, 3, 4, 5, 6, 8, 9, 10];  //length 9
// 0  1  2  3  4  5  6  7   8


for (var i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
}

//Step 1::      0 < 9  true   numbers[0]==>9       0++ 0+1  var i=1

//Step 2::       1< 9  true  numbers[1]===>2      

var fruits = ["banana", "apple", "orange", "Mango"];

for (var i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}



var students = [   //array of objects
    {
        id: 1,
        username: "sai", //SAI
        age: 18,
        dept: "CSE",
        salary: 12000
    },
    {
        id: 2,
        username: "raj", //RAJ
        age: 21,
        dept: "ECE",
        salary: 18000
    },
    {
        id: 3,
        username: "charan", //CHARAN
        age: 24,
        dept: "AI",
        salary: 21000
    }
]


//reduce()
12000
18000
var totalSalary = students.reduce((acc, cur) => acc + cur.salary, 0);
console.log(totalSalary);

/***
 *   Display student Object age>21
 *
 */

// const filteredStudent = students.filter(function (student){
//     return student.age>21;
// });


const filteredStudent = students.filter((student) => student.age > 21); //boolean true or false

// console.log(filteredStudent);





//map()

const upperCaseStudents = students.map(function (student) {
    return student.username.toUpperCase();
})

console.log(upperCaseStudents);

//print age is equals to 24


//reduce

let arr = [1, 2, 3, 4, 5];     //  array sum=15


var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

var total = arr.reduce(function (acc, current) {
    return acc + current;
})
console.log(total);

var s = arr.reduce((acc, current) => acc + current);  //returns only single Value
// console.log(s);


function printAgeEqualsTo24() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].age === 24) {
            //console.log(students[i]);
        }
    }
}

// printAgeEqualsTo24();


//print age is equals to 24  and equals to 21



function printAgeEqualsTo24And21() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].age === 24 || students[i].age === 21) {
            // console.log(students[i]);
        }
    }
}

printAgeEqualsTo24And21();



/**
 *  1.print username in uppercase return Whole Object
 * 
 */