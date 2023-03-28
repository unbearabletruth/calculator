function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function help(){
    console.log("1 - add; 2 - substract; 3 - multiply, 4 - divide")
}
function calculate(){
    help();
    let first_n = prompt("first number:")
    let second_n = prompt("second number:")
    let operator = prompt("choose what to do:");
    if (operator == "1"){
        console.log(add(first_n, second_n));
    } else if (operator == "2"){
        console.log(substract(first_n, second_n));
    } else if (operator == "3"){
        console.log(multiply(first_n, second_n));
    } else if (operator == "4"){
        console.log(divide(first_n, second_n));
    }
}

//calculate();