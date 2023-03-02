const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function (operator, a, b){
    if (operator == "+" ){
        return add(a,b);
    }
}

const display = document.getElementById("screen");
const plus = document.getElementById("plus");
plus.addEventListener("click", storeNum)

function storeNum (numA) {
    numA = display.innerHTML;
;}

const onClick = (event) => {
    console.log(event.target.innerHTML);
    display.innerHTML += event.target.innerHTML;
  }
  window.addEventListener('click', onClick);