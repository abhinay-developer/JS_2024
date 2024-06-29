console.log("Async Await");

var URL = "https://jsonplaceholder.typicode.com/users";


async function getAllUsers() {
    var users = await fetch(URL);
    var data = await users.json();
    console.log(data);
}

getAllUsers();


var getUsers = async () => {
    var users = await fetch(URL);
    var data = await users.json();
    console.log(data);
}

var getUser = async function () {
    var users = await fetch(URL);
    var data = await users.json();
    console.log(data);
}
