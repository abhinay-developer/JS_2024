console.log("Proimse");

//The Promise object represents the eventual completion
//(or failure) of an asynchronous operation and its resulting value.

/**
 * 
 * Promise ==>  1.Pending 2.Fullfilled 3.Rejected;
 * 
 */
/**
 * 
 * In JavaScript, "async" and "sync" refer to the way code is executed and how it handles operations that take time to complete (like network requests or database queries).

Synchronous (Sync):

- Code is executed in a sequence, one line at a time.
- Each line must complete before the next one starts.
- If an operation takes time, the code will "block" and wait for it to finish.
- Can lead to a "freezing" or "locking" effect, making the UI unresponsive.

Example: console.log(1); console.log(2); - Each log statement is executed one after the other, in sequence.

Asynchronous (Async):

- Code is executed in parallel, allowing multiple operations to happen simultaneously.
- Operations that take time are "non-blocking", meaning the code continues executing without waiting.
- Uses callbacks, promises, or async/await to handle the results of these operations.
- Keeps the UI responsive and allows for a better user experience.

Example: setTimeout(() => console.log(1), 2000); console.log(2); - The setTimeout function runs in parallel with the second log statement, which is executed immediately.

In summary:

- Sync: Code executes in sequence, blocking if an operation takes time.
- Async: Code executes in parallel, non-blocking, allowing for a responsive UI.

JavaScript is inherently asynchronous, and understanding this concept is crucial for building efficient and scalable applications.


The keyword async before a function makes the function return a promise:


The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
 */


function myPromise() {
    const promise = new Promise((resolve, reject) => {
        let apiResponse = false;

        if (apiResponse) {
            resolve("API HANDLED SUCCESS FULLY");
        }
        else {
            reject("API CALL IS FAILED");
        }
    })

    promise.then((data) => console.log(data)).catch((error) => console.log(error));
}

//myPromise();
/**
 *       1. Data(response)     =====>.then(res)
 *       2. err  (error)       =====>.catch(error)
 */

// console.log(myPromise(),)
// myPromise.then((data) => console.log(data))

const URL = "https://randomuser.me/api/?results=5";

function getRandomUsers() {
    console.log(URL);
    const users = fetch(URL);//promise
    console.log(users);//promise
    //PROMISE ====> THEN==> READBELE STREAM==>JSON ===>THEN
    users.then((data) => data.json()) //json data
        .then((data) => console.log(data))//json data prints on console
        .catch(error => console.log(error));//error 
    // fetch(URL).then((res) => res.json())
    //     .then((data) => console.log(data)).catch((error) => {
    //         console.log(error)
    //     })
}
// getRandomUsers();




async function getMyUsers() {
    try {
        const users = await fetch(URL);
        const data = await users.json();
        console.log(data);
    } catch (error) {
        throw new Error(error);
    }

}

getMyUsers();

function x() {
    console.log("X");
}

function y(functionX, value) {
    console.log("Y");
    functionX();
    console.log(value);
}

y(x, "Hello");

// x=function x() {
//     console.log("X");
// }

// functionX=function x() {
//     console.log("X");
// }
// functionX();
//Y
//X
//HELLO