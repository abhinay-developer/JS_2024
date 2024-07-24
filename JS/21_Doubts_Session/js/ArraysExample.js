console.log("Array Map ,Filter ,Reduce");

const numbers = [1, 2, 3, 4, 5];
//0 1 2 3 4 5
//const output = [2, 4, 6, 8, 10];

// Array.map();
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

//  anonymousFunction /arrow Function  or Normal Function  

// function double(value) {
//     return value * 2;
// }

// const output = numbers.map(double);

//(value)=> value*2;

//(arrayEachValue)=>

const output = numbers.map((value) => value * 2);

console.log(output);


const names = ["Sai", "rajesh", "Naresh", "Suresh", "Lokesh"];

//const names = ["Sai-super", "rajesh", "Naresh", "Suresh-super", "Lokesh"];



// function convertToUpperCase(name) {
//     return name.toUpperCase();
// }

// const result = names.map(convertToUpperCase);

// const result = names.map((name) => name.toUpperCase());
// console.log(result);

// const result = names.map((name) => {
//     if (name.startsWith('S')) {
//         return name + "-Super";
//     }
//     else {
//         return name;
//     }
// })

const result = names.map((name) => {
    if (name.startsWith("L")) {
        return name.toUpperCase();
    }
    return name;
})


console.log(result);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < myNumbers.length; i++) {
//     if (myNumbers[i] % 2 == 0) {
//         console.log(myNumbers[i]);
//     }
// }

const evenNumbers = myNumbers.filter((number) => number % 2 == 0);
console.log(evenNumbers);