console.log("JS Functions");

/**
 *  1.Function With Return
 *       a) Function with Parameters
 */

/**
 *  add Two Numbers
 */

function addTwoNumbers() {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log("Type of sum:" + typeof (sum));
    return sum; //number
}

//console.log("Addition of two Numbers:" + addTwoNumbers())

/**
 *  return firstName ,lastName
 */

function displayName() {
    var firstName = "Raj";
    var lastName = "Kumar";
    return firstName + lastName;
}

//console.log("Full Name:" + displayName())



function withDrawAmount(wAmount) {
    var balance = 10000;
    var actualBalance = balance - wAmount;
    console.log("Your Balance is:" + actualBalance);
}

//withDrawAmount(300); //number


function createStudentIDCard(firstName, lastName, age, gender) {
    var studentObj = {
        id: Math.random(10000).toFixed() * 1000,
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    }

    //console.log("Student ID Card Created Successfully" + JSON.stringify(studentObj))
}

createStudentIDCard("Goutham", "Sena", 18, "M");
createStudentIDCard("virat", "kholi", 35, "M");
createStudentIDCard("Rohit", "Sharma", 35, "M");


/**
 * 2.function without Return
 *   with Paramters
 *      
 */


function getAadharNo() {
    var aadharNo = 120000002001;
    // console.log("Aaadhar NO:" + aadharNo);
}

function getAadharInfo(aadharNo) {
    console.log("Aaadhar NO:" + aadharNo);
}

getAadharInfo(120000002001); //function Call /Method Call



/**
 * 
 *   1.  age > =18     Eligible for  Vote  / Not Eligile
 *   2.  Even Numbers      1-50
 *   3.  Odd Numbers       1-50
 *   4.  Prime Numbers     1-50  
 * 
 */