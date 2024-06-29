console.log("JS Promises");


function getAllUsers() {
    var x = 10;
    var promise = new Promise((resolve, reject) => {

        if (x == 10) {
            resolve("PROMISE IS RESOLVED");
        } else {
            reject("PROMISE IS REJECTED");
        }

    })

    promise.then((res) => console.log(res)).catch((error) => console.log(error));

    console.log(promise)
}


getAllUsers();

// Fullfilled  ,  Pending ,rejected ,Failed,success

// then()   , catch()