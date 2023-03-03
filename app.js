const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let valueA = "";
let valueB = "";
let selectedOperator = "";

const operate = function (){
    store();
    a = parseInt(valueA);
    b = parseInt(valueB);
    
    if (selectedOperator === "+" ){
        display.innerHTML = add(a,b);
        valueA = display.innerHTML;
    } else if (selectedOperator === "-") {
        display.innerHTML = subtract(a,b);
        valueA = display.innerHTML;
    } else if (selectedOperator === "*") {
        display.innerHTML = multiply(a,b);
        valueA = display.innerHTML;
    } else if (selectedOperator === "/") {
        display.innerHTML = divide(a,b);
        valueA = display.innerHTML;
    }
}

const display = document.getElementById("screen");

// const onClick = (event) => {
//     console.log(event.target.innerHTML);
//     display.innerHTML += event.target.innerHTML;
//   }
//   window.addEventListener('click', onClick);

const nums = document.getElementsByClassName("nums");

const numClick = (event) => {
    if (display.innerHTML == selectedOperator) {
        display.innerHTML = "";
    }
    display.innerHTML += event.target.innerHTML;
  }

for (let num of nums) {
    num.addEventListener("click", numClick);
}

const operators = document.getElementsByClassName("operator");

const opsClick = (event) => {
    store();
    selectedOperator = event.target.innerHTML;
    display.innerHTML = event.target.innerHTML;
  }

for (let operator of operators) {
    operator.addEventListener("click", opsClick);
}

const store = function() { 
    if (valueA == false){
    valueA = display.innerHTML;
    } else {
    valueB = display.innerHTML;
    }
}

const equals = document.getElementById("equals");
equals.addEventListener("click", operate);


