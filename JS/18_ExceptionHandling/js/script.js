console.log("JS Exception Handling");

const URL = "https://randomser.me/api/?results=5";


async function getUsers() {
    try {
        const users = await fetch(URL);
        const data = await users.json();
        console.log(data.results);
    } catch (error) {
        throw new Error(error);
    }

}

getUsers();