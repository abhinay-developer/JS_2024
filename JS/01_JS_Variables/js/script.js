console.log("JS Variables");


/**
 * 
 * number ,string ,boolean ,object [arrray,object]
 */


var firstName = "sai";//string
var lastName = "Kumar";
var isQualified = false;//boolean 
var age = 38;//number
var bankBalance = 10000.0;
var aadhar = {          //object
    id: 1,
    aadharNo: 20002000002
}
var names = ["sai", "raj", "karan"]; //array (object)


console.log("FirstName:" + firstName);
console.log("LastName:" + lastName);
console.log("isQualified:" + isQualified);
console.log("age:" + age);
console.log("bankBalance:" + bankBalance);
console.log("aadhar:" + aadhar.id);
console.log("names:" + names);
console.log("==========================================================================")

console.log("FirstName:" + typeof (firstName));
console.log("LastName:" + typeof (lastName));
console.log("isQualified:" + typeof (isQualified));
console.log("age:" + typeof (age));
console.log("bankBalance:" + typeof (bankBalance));
console.log("aadhar:" + typeof (aadhar));
console.log("names:" + typeof (names));