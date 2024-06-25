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
        username: "sai",
        age: 18,
        dept: "CSE"
    },
    {
        id: 2,
        username: "raj",
        age: 21,
        dept: "ECE"
    },
    {
        id: 3,
        username: "charan",
        age: 24,
        dept: "AI"
    }
]


//print age is equals to 24


function printAgeEqualsTo24() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].age === 24) {
            console.log(students[i]);
        }
    }
}

// printAgeEqualsTo24();


//print age is equals to 24  and equals to 21



function printAgeEqualsTo24And21() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].age === 24 || students[i].age === 21) {
            console.log(students[i]);
        }
    }
}

printAgeEqualsTo24And21();