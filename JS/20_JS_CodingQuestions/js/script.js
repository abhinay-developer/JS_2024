// Got it! Here are the questions:

// 1. *Reverse a String:*
//    Write a function reverseString(str) that takes a string as input and returns the string reversed.

// 2. *Check for Palindrome:*
//    Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward).

// 3. *Find the Largest Number in an Array:*
//    Write a function findLargest(arr) that takes an array of numbers as input and returns the largest number.

// 4. *Sum All Numbers in an Array:*
//    Write a function sumArray(arr) that takes an array of numbers as input and returns the sum of all the numbers.

// 5. *Remove Duplicates from an Array:*
//    Write a function removeDuplicates(arr) that takes an array of numbers as input and returns a new array with duplicates removed.


function reverseString(courseName) {
    // let course = courseName.split("").reverse().join("");
    // console.log(course
    let reverseStr = "";
    for (let i = courseName.length; i >= 0; i--) {
        reverseStr = reverseStr + courseName.charAt(i);
    }

    return reverseStr;
}

let reversedString = reverseString("JavaScript");

// console.log(reversedString);



function isPalindromeString(str) {
    let reverseString = str.split("").reverse().join("");
    console.log(reverseString);
    return str === reverseString ? true : false;

    // if (str === reverseString) {
    //     return true;
    // }
    // else {
    //     return false;
    // } 

}

const palindrome = isPalindromeString("madam");
// console.log(palindrome); //true or false


/**
 * 3. *Find the Largest Number in an Array:*
 */

const arr = [9, 1, 3, 4, 57, 98];  //98


function findLargest() {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest; //number
}

const value = findLargest();
console.log(value);


const elements = [9, 1, 3, 4, 57, 98];  //98


function findSum() {
    let summation = 0;

    for (let i = 0; i < elements.length; i++) {
        summation = summation + elements[i];
    }
    return summation; //number
}

const sum = findSum();
console.log(sum)


function removeDuplicates() {
    const myArray = [1, 2, 4, 4, 5, 5, 66, 88, 102, 3, 8];

    const mySet = new Set();

    for (let i = 0; i < myArray.length; i++) {
        mySet.add(myArray[i]);
    }
    mySet.forEach((element) => console.log(element))
}

removeDuplicates();