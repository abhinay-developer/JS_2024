console.log("JS Event Handling");



var OPERATION = "";

function onOperationHandleChange(event) {
    OPERATION = event.target.value;
}




function calculate() {
    switch (OPERATION) {
        case "add":
            add();
            break;
        case "sub":
            sub();
            break;
        case "mul":
            mul();
            break;
        case "div":
            div();
            break;
        default:
            console.log("INVALID OPERATION")
            break;
    }
}

//SOLID PRINCIPLES         SINGLE RESPOSIBILITY PRICIPLE

const add = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const sum = parseInt(num1) + parseInt(num2);
    document.getElementById('output').innerHTML = sum;
}

const sub = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    subtraction = parseInt(num1) - parseInt(num2);
    document.getElementById('output').innerHTML = subtraction;

}

const mul = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const multiplication = parseInt(num1) * parseInt(num2);
    document.getElementById('output').innerHTML = multiplication;

}

const div = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    division = parseInt(num1) / parseInt(num2);
    document.getElementById('output').innerHTML = division;

}

