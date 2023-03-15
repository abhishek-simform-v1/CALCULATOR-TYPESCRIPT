


// // calculator screen
const calculatorDisplay = document.querySelector(".display-container");
const form = document.getElementById("myForm");
const mydropDownMenu = document.querySelector(".dropdown-menu-scitific");
const mydropdown = document.getElementById("my-dropdown-Scintific");
const mydropdownfunc = document.querySelector(".d-function");
const dropdownFunctions = document.querySelectorAll(
  ".calculator-tf-trigonometry"
);
const dropdownTriangle = dropdownFunctions[0];
const dropdownFunction = dropdownFunctions[1];
const displayInput = document.querySelector("#display-input");

const dropdownModalTriangle = document.querySelector(".calculator-tf-modal-1");
const dropdownModalFunction = document.querySelector(".calculator-tf-modal-2");

const error = document.getElementById("error");

dropdownTriangle.addEventListener("click", () => {
  dropdownModalTriangle.classList.contains("hide")
    ? dropdownModalTriangle.classList.remove("hide")
    : dropdownModalTriangle.classList.add("hide");
  if (!dropdownModalFunction.classList.contains("hide")) {
    dropdownModalFunction.classList.add("hide");
  }
});
dropdownFunction.addEventListener("click", () => {
  dropdownModalFunction.classList.contains("hide")
    ? dropdownModalFunction.classList.remove("hide")
    : dropdownModalFunction.classList.add("hide");
  if (!dropdownModalTriangle.classList.contains("hide")) {
    dropdownModalTriangle.classList.add("hide");
  }
});


function trimSpaces(str) {
  let newStr = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
    i++;
  }
  return newStr;
}
function cal(stack, currentNumber, sign) {
  if (sign === "+") {
    stack.push(currentNumber);
  } else if (sign === "-") {
    stack.push(-currentNumber);
  } else if (sign === "/") {
    stack.push(stack.pop() / currentNumber);
  } else if (sign === "*") {
    stack.push(stack.pop() * currentNumber);
  } else if (sign === "%") {
    stack.push(stack.pop() % currentNumber);
  } else if (sign === "^") {
    stack.push(Math.pow(stack.pop(), currentNumber));
  } else if (sign === "√") {
    if (sign == "√") {
      stack.push(Math.sqrt(currentNumber));
    } else {
      let operand = 1 / stack.pop();
      stack.push(Math.pow(currentNumber, operand));
    }
  }
}
function calculate(s) {
  s = trimSpaces(s);
  let stack = [];
  let stackSignPair = [];
  let sign = "+";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      let currentNumber = "";
      while (!isNaN(Number(s[i])) || s[i] === ".") {
        currentNumber += s[i];
        i++;
      }
      i--;
      currentNumber = Number(currentNumber);
      cal(stack, currentNumber, sign);
    } else if (s[i] === "(") {
      stackSignPair.push([stack, sign]);
      stack = [];
      sign = "+";
    } else if (s[i] === ")") {
      let currentNumber = stack.reduce((acc, curr) => (acc += curr), 0);
      let getPair = stackSignPair.pop();
      [stack, sign] = getPair;
      cal(stack, currentNumber, sign);
    } else {
      sign = s[i];
    }
  }
  let acc = stack.reduce((acc, curr) => (acc += curr), 0);
  return acc;
}
// add function
function addToScreen(val) {
  calculatorDisplay.value += val;
}
// delete function

function deletVal() {
  calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}

function clearScreen(val) {
  calculatorDisplay.value = val;
}
form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  submit();
}
function submit() {
  evalutedResult = calculate(calculatorDisplay.value);
  if (isNaN(evalutedResult)) {
    calculatorDisplay.value = "";
    error.style.color = "#ff0000";
    error.innerHTML = "<p>not a number</p>";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1000);
  } else {
    calculatorDisplay.value = evalutedResult;
    return evalutedResult;
  }
}
