console.log("JS TASKS")

/**
 * 
 *   1.  age > =18     Eligible for  Vote  / Not Eligile
 *   2.  Even Numbers      1-50
 *   3.  Odd Numbers       1-50
 *   4.  Prime Numbers     1-50  
 * 
 */


function isEligible(age) {
    if (age >= 18) { //Condition true
        console.log("Eligible For Vote");
    } else {   //Condtion false
        console.log("Not Eligible For Vote");
    }
}

// isEligible(19);


function printEvenNumbers50() {
    for (var i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }

    }
}
// printEvenNumbers50();


function printOddNumbers50() {
    for (var i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }

    }
}
// printOddNumbers50();


function printPrimeNumbers50() {

    for (var i = 2; i <= 50; i++) {
        if (i % 2 == 0) {
            break;
        } else {
            console.log(i);
        }
    }

}

printPrimeNumbers50();
// 2,3,5,7,11,13,17,19,