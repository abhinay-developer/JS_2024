console.log("String Methods");


var str = "I am Learning Java Script";

/**
 * Find the Length Of the String
 */

var strLength = str.length;
console.log("Length of the String:" + strLength);

/**
 *  vowels and Consoants
 */

/**
 *  aeiou
 */

var vowelsCount = 0;
var consonantsCount = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        vowelsCount = vowelsCount + 1;
    } else {
        consonantsCount = consonantsCount + 1;
    }
}

// console.log("Vowels Count:" + vowelsCount);
// console.log("Consonants Count:" + consonantsCount);


var carNames = ["BMW", "AUDI", "BENZ", "VOLVO", "VERNA"];

/**
 * print car starts with B
 */

for (var i = 0; i < carNames.length; i++) {
    if (carNames[i].startsWith("B")) {
        // console.log(carNames[i]);
    }
}

for (var i = 0; i < carNames.length; i++) {
    if (carNames[i].endsWith("A")) {
        //console.log(carNames[i]);
    }
}

for (var i = 0; i < carNames.length; i++) {
    // console.log(carNames[i].toLowerCase());
}

var bikes = ["pulsar", "royal", "activa", "fz"];

for (var i = 0; i < bikes.length; i++) {
    // console.log(bikes[i].toUpperCase());
}

var names = ["Rajakumar", "saiKumar", "Naveen"];

for (var i = 0; i < names.length; i++) {
    console.log(names[i].substring(0, 3))
}
/**
 * 
 *   1. Reverse String
 *   2. var str="abbbabbbabba";  a= {4} , b={x}
 *   3. Practice All String Methods
 *   4. How to create , numbers array,string array, array of objects + examples
 *   5. https://images.template.net/wp-content/uploads/2022/07/Event-Form.jpg (Develop using Html + CSS )
 * 
 */