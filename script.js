let first_n;
let second_n;
let operator;
const numbers = document.getElementsByTagName("button");
const clearing = document.getElementById("clear");
let display = document.querySelector("#display");

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

function calculate(first, second, op){
    if (op == "+"){
        return(add(first, second));
    } else if (op == "-"){
        return(substract(first, second));
    } else if (op == "*"){
        return(multiply(first, second));
    } else if (op == "/"){
        return(divide(first, second));
    }
}

function populate(e){
    display.textContent += e.target.textContent;
    [first_n, second_n] = display.textContent.split(/[*+-/]/);
    let contentarray = display.textContent.split("");
    let operators = contentarray.filter(char => char === "+" || char === "-" || char === "*" || char === "/");
    let helper = display.textContent;
    let slicer = 2;
    if (e.target.textContent === "="){
        for (operator of operators){
            display.textContent = calculate(parseInt(first_n), parseInt(second_n), operator);
            second_n = helper.split(/[*+-/]/).slice(slicer);
            slicer++;
            first_n = display.textContent;
        }
    }
}
  
function clear(){
    display.textContent = "";
}

clearing.addEventListener("click", clear);

for (number of numbers){
number.addEventListener("click", populate);
} 

