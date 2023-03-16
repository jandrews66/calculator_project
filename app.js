const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let a = "";
let b = "";
let c = "";

let selectedOperator = "";

const operate = function (){
    store();
    if (selectedOperator === "+" ){
        c = add(a, b);
        a = c;
        b = "";
        selectedOperator = "";
        showTopDisplay();
        btmDisplay.innerHTML = "";
      
    } else if (selectedOperator === "-") {
        c = subtract(a, b);
        a = c;
        b = "";
        selectedOperator = "";
        showTopDisplay();
        btmDisplay.innerHTML = "";
    } else if (selectedOperator === "*") {
        c = multiply(a, b);
        a = c;
        b = "";
        selectedOperator = "";
        showTopDisplay();
        btmDisplay.innerHTML = "";
    } else if (selectedOperator === "/") {
        c = divide(a, b);
        if (c == Infinity){
            c = "fuck off"
        }
        a = c;
        b = "";
        selectedOperator = "";
        showTopDisplay();
        btmDisplay.innerHTML = "";
    }
}

const topDisplay = document.getElementById("top-display");
const btmDisplay = document.getElementById("btm-display");


const nums = document.getElementsByClassName("nums");

const numClick = (event) => {
    btmDisplay.innerHTML += event.target.innerHTML;
    showTopDisplay();
  }

for (let num of nums) {
    num.addEventListener("click", numClick);
}



const operators = document.getElementsByClassName("operator");

const opsClick = (event) => {
    if (selectedOperator == ""){
    selectedOperator = event.target.innerHTML;
    store();
    showTopDisplay();
    btmDisplay.innerHTML = "";
    } else {
        operate();
        selectedOperator = event.target.innerHTML;
        topDisplay.innerHTML += selectedOperator;

    }
  }

for (let operator of operators) {
    operator.addEventListener("click", opsClick);
}

const showTopDisplay = function () {
    topDisplay.innerHTML = a + selectedOperator;
}

const store = function() { 
    if (a == false){
    a = parseFloat(btmDisplay.innerHTML);
    } else {
    b = parseFloat(btmDisplay.innerHTML);
    }
}



const equals = document.getElementById("equals");
equals.addEventListener("click", operate);

const clear = document.getElementById("clear");
const clearDisplay = function() { 
    btmDisplay.innerHTML = ""; 
    topDisplay.innerHTML = ""; 
    a = "";
    b = "";
    selectedOperator = "";

}
clear.addEventListener("click", clearDisplay);

const remove = document.getElementById("delete");
const removeChar = function(){
    string = btmDisplay.innerHTML;
    newString = string.slice(0,-1);
    btmDisplay.innerHTML = newString;
}
remove.addEventListener("click", removeChar);

const decimal = document.getElementById("decimal");
const addDecimal = () => {
    if (!btmDisplay.innerHTML.includes(".")){
    btmDisplay.innerHTML += ".";
    }
}
decimal.addEventListener("click", addDecimal);


// 
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// let valueA = "";
// let valueB = "";
// let selectedOperator = "";

// const operate = function (){
//     store();
//     a = parseFloat(valueA);
//     b = parseFloat(valueB);
    
//     if (selectedOperator === "+" ){
//         display.innerHTML = add(a,b);
//         valueA = display.innerHTML;
//         valueB = "";
//         selectedOperator = "";
//     } else if (selectedOperator === "-") {
//         display.innerHTML = subtract(a,b);
//         valueA = display.innerHTML;
//         valueB = "";
//         selectedOperator = "";
//     } else if (selectedOperator === "*") {
//         display.innerHTML = multiply(a,b);
//         valueA = display.innerHTML;
//         valueB = "";
//         selectedOperator = "";
//     } else if (selectedOperator === "/") {
//         display.innerHTML = divide(a,b);
//         valueA = display.innerHTML;
//         valueB = "";
//         selectedOperator = "";
//     }
// }

// const display = document.getElementById("screen");

// const nums = document.getElementsByClassName("nums");

// const numClick = (event) => {
//     if (display.innerHTML == selectedOperator) {
//         display.innerHTML = "";
//     }
//     display.innerHTML += event.target.innerHTML;
//   }

// for (let num of nums) {
//     num.addEventListener("click", numClick);
// }

// const operators = document.getElementsByClassName("operator");

// const opsClick = (event) => {
//     if (selectedOperator !== ""){
//         operate();
//     } else {
//     store();
//     selectedOperator = event.target.innerHTML;
//     display.innerHTML = event.target.innerHTML;
//     }
//   }

// for (let operator of operators) {
//     operator.addEventListener("click", opsClick);
// }

// const store = function() { 
//     if (valueA == false){
//     valueA = parseFloat(display.innerHTML);
//     } else {
//     valueB = parseFloat(display.innerHTML);
//     }
// }

// const equals = document.getElementById("equals");
// equals.addEventListener("click", operate);

// const clear = document.getElementById("clear");
// const clearDisplay = function() { 
//     display.innerHTML = "";
//     valueA = "";
//     valueB = "";
// }
// clear.addEventListener("click", clearDisplay);

// const remove = document.getElementById("delete");
// const removeChar = function(){
//     string = display.innerHTML;
//     newString = string.slice(0,-1);
//     display.innerHTML = newString;
// }
// remove.addEventListener("click", removeChar);

// const decimal = document.getElementById("decimal");
// const addDecimal = () => {
//     display.innerHTML += ".";
// }
// decimal.addEventListener("click", addDecimal);
