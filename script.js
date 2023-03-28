let first_n;
let second_n;
let operator;

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

function calculate(first, second, op){
    help();
    if (operator == "1"){
        return(add(first, second));
    } else if (op == "2"){
        console.log(substract(first, second));
    } else if (op == "3"){
        console.log(multiply(first, second));
    } else if (op == "4"){
        console.log(divide(first, second));
    }
}



const numbers = document.getElementsByTagName("button");

function populate(e){
    let display = document.querySelector("#display");
    display.textContent += e.target.textContent;
    if (e.target.textContent === "+"){
        operator = "1";
        
        console.log(first_n)
        console.log(operator)
        
    }
    [first_n, second_n] = display.textContent.split("+");
    console.log(first_n)
    console.log(second_n)
    if (e.target.textContent === "="){
        display.textContent = calculate(parseInt(first_n), parseInt(second_n), operator)
    }
  }   

for (number of numbers){
number.addEventListener("click", populate);
} 