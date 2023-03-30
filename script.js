let previous = "";
let current = "";
let operator = "";
let display_value;

const all_numbers = document.querySelectorAll(".numbers");
all_numbers.forEach(number => {
    number.addEventListener("click", () => {
        append_number(number.textContent);
    });  
});

const all_operators = document.querySelectorAll(".operators");
all_operators.forEach(element => {
    element.addEventListener("click", () => {
        choose_operator(element.textContent);
    })
});

const equals = document.querySelector("#eq");
equals.addEventListener("click", result)

const clear_display = document.querySelector("#clear");
clear_display.addEventListener("click", wipe);

let display = document.querySelector("#display");

function calculate(){
    previous = Number(previous);
    current = Number(current);
    if (operator === "+"){
        return previous + current;
    } else if (operator === "-"){
        return previous - current;
    } else if (operator === "*"){
        return previous * current;
    } else if (operator === "/"){
        return previous / current;
    }
}

function update_display(){
    display.textContent = display_value;
}

function append_number(number){
    current += number;
    display_value = current;
    update_display();
}

function choose_operator(op){
    if (previous === ""){
        previous = current;
        operator = op;
        display_value = "";
        update_display();
        current = "";
    } else {
        display_value = calculate();
        console.log(display_value);
        update_display();
        previous = display_value;
        operator = op;
        current = "";
    }   
}

function result(){
    if (current === "" || previous === ""){
        return
    }
    display_value = roundnumber(calculate());
    update_display();
}

function roundnumber(num){
    return Math.round(num * 100000) / 100000;
}

function wipe(){
    previous = "";
    current = "";
    operator = "";
    display_value = "";
    update_display();
}

    




