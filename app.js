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

// This function removes all spaces from a string
function trimSpaces(str) {
  let newStr = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== " ") {
      // Check if current character is not a space
      newStr += str[i]; // If not a space, add to new string
    }
    i++; // Move to the next character in the string
  }
  return newStr;
}

// This function performs the arithmetic operation based on the sign
function cal(stack, currentNumber, sign) {
  if (sign === "+") {
    // Addition operation
    stack.push(currentNumber); // Add current number to the stack
  } else if (sign === "-") {
    // Subtraction operation
    stack.push(-currentNumber); // Add negative of current number to the stack
  } else if (sign === "/") {
    // Division operation
    stack.push(stack.pop() / currentNumber); // Divide top of the stack by current number and add to stack
  } else if (sign === "*") {
    // Multiplication operation
    stack.push(stack.pop() * currentNumber); // Multiply top of the stack by current number and add to stack
  } else if (sign === "%") {
    // Modulo operation
    stack.push(stack.pop() % currentNumber); // Modulo top of the stack by current number and add to stack
  } else if (sign === "^") {
    // Exponentiation operation
    stack.push(Math.pow(stack.pop(), currentNumber)); // Raise top of the stack to the power of current number and add to stack
  } else if (sign === "√") {
    // Square root operation

    let operand = 1 / currentNumber;
    console.log("operand", operand);
    console.log(stack.pop()); // Take inverse of the top of the stack
    stack.push(Math.pow(stack.pop(), operand)); // Raise current number to the power of the inverse and add to stack
  } else if (sign === "log") {
    // log operation
    function getBaseLog(x, y) {
      console.log(x);
      console.log(y);
      return Math.log(y) / Math.log(x);
    }
    console.log(currentNumber);
    console.log(stack.pop());
    stack.push(getBaseLog(getBaseLog(currentNumber, stack.pop())));
  }
}

// This function Evaluate the string
function calculate(expression) {
  // Trim any whitespace from the input string
  expression = trimSpaces(expression);

  // Initialize a stack to hold numbers, a stack to hold sign pairs, and a default sign of '+'
  let stack = [];
  let stackSignPair = [];
  let sign = "+";

  // Loop through each character in the expression
  for (let i = 0; i < expression.length; i++) {
    // If the character is a number or decimal point, keep adding to the current number until a non-number character is encountered
    if (!isNaN(Number(expression[i]))) {
      let currentNumber = "";
      while (!isNaN(Number(expression[i])) || expression[i] === ".") {
        currentNumber += expression[i];
        i++;
      }
      i--;
      currentNumber = Number(currentNumber);

      // Use the current sign to perform the appropriate calculation and add to the stack
      cal(stack, currentNumber, sign);

      // If the character is an opening parenthesis, push the current stack and sign onto the sign pair stack and reset the current stack and sign
    } else if (expression[i] === "(") {
      stackSignPair.push([stack, sign]);
      stack = [];
      sign = "+";

      // If the character is a closing parenthesis, reduce the current stack to a single number and pop the last sign pair from the sign pair stack to continue the calculation
    } else if (expression[i] === ")") {
      let currentNumber = stack.reduce((acc, curr) => (acc += curr), 0);
      let getPair = stackSignPair.pop();
      [stack, sign] = getPair;

      // Use the popped sign to perform the appropriate calculation and add to the stack
      cal(stack, currentNumber, sign);

      // Otherwise, update the current sign
    } else {
      sign = expression[i];
    }
  }

  // Reduce the final stack to a single number and return it
  let result = stack.reduce((acc, curr) => (acc += curr), 0);
  return result;
}
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
document.onkeydown = function (e) {
  if (window.event.keyCode == "13") {
    submit();
    e.preventDefault();
  }
};
