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
    if (operator == "1"){
        return(add(first, second));
    } else if (op == "2"){
        return(substract(first, second));
    } else if (op == "3"){
        return(multiply(first, second));
    } else if (op == "4"){
        return(divide(first, second));
    }
}

function populate(e){
    display.textContent += e.target.textContent;
    if (e.target.textContent === "+"){
        operator = "1";
    } else if (e.target.textContent === "-"){
        operator = "2";
    } else if (e.target.textContent === "*"){
        operator = "3";
    } else if (e.target.textContent === "/"){
        operator = "4";
    }
   
    [first_n, second_n] = display.textContent.split(/[*+-/]/);
    if (e.target.textContent === "="){
        display.textContent = calculate(parseInt(first_n), parseInt(second_n), operator)
    /*let contentarray = display.textContent.split("");
    let operators = contentarray.filter(operator => operator === "+")
    if (e.target.textContent === "="){
        for (op of operators){
            display.textContent = calculate(parseInt(first_n), parseInt(second_n), op)
            first_n = display.textContent
            //change second_n so it would be the next number not as in the first iteration

            console.log(first_n);
        }
    }
    */
    }
}   

function clear(){
    display.textContent = "";
}

clearing.addEventListener("click", clear);

for (number of numbers){
number.addEventListener("click", populate);
} 

