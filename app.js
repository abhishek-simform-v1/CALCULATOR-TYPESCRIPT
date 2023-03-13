// // calculator screen
const calculatorDisplay = document.querySelector(".display-container");
// numbers
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const form = document.getElementById("myForm");


// operator
const openParenthesis = document.querySelector("#opened-parenthesis");
const closedParenthesis = document.querySelector("#closed-parenthesis");
const eraseAll = document.querySelector("#erase-all-sign");
const eraseButton = document.querySelector("#erase-button");
const divideButton = document.querySelector("#split-operator");
const multiplicationButton = document.querySelector("#multiplication-operator");
const lessButton = document.querySelector("#less-operator");
const plusButton = document.querySelector("#plus-operator");
const decimalButton = document.querySelector("#decimal-operator");
const equalButton = document.querySelector("#equal-button");


const mydropdown = document.querySelector(".dropdown-menu-scitific");

function drop() {
  // mydropdown.classList.remove("hide")
  console.log("hi");
  mydropdown.classList.contains("hide")
    ? mydropdown.classList.remove("hide")
    : mydropdown.classList.add("hide");
}
const mydropdownfunc = document.querySelector(".d-function");

function dropf() {
  // mydropdown.classList.remove("hide")
  console.log("hi");
  mydropdownfunc.classList.contains("hide")
    ? mydropdownfunc.classList.remove("hide")
    : mydropdownfunc.classList.add("hide");
}
const handleValue = (val) => {
  event.preventDefault();
  console.log(val);
};




function prec(C) {
  switch (C) {
    case "log":
      return 4;
    case "^":
      return 3;
    case "*":
      return 2;
    case "√":
      return 3;
    case "/":
      return 2;
    case "%":
      return 2;
    case "+":
      return 1;
    case "-":
      return 1;
    default:
      return 0;
  }
}

function infixToPostfix(s) {
  let PostStack = []; // For stack operations, we are using JavaScript built-in stack
  let result = [];
  let postFix = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (/[a-zA-Z0-9]/.test(c)) {
      // Using regular expression to check if c is an operand
      result.push(c);
    } else if (c == "(") {
      PostStack.push("(");
    } else if (c == ")") {
      while (PostStack[PostStack.length - 1] != "(") {
        result.push(PostStack[PostStack.length - 1]);
        PostStack.pop();
      }
      PostStack.pop();
    } else {
      // If an operator is scanned
      while (
        PostStack.length != 0 &&
        prec(c) <= prec(PostStack[PostStack.length - 1])
      ) {
        result.push(PostStack[PostStack.length - 1]);
        PostStack.pop();
      }
      PostStack.push(c);
    }
  }

  while (PostStack.length != 0) {
    // Pop all the remaining elements from the stack
    result.push(PostStack[PostStack.length - 1]);
    PostStack.pop();
  }
  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    let token = result[i];
    if (isNaN(token)) {
      postFix.push(token);
    } else postFix.push(Number(token));
  }
  return result;
}

function strToArray(str) {
  let resArr = [];
  let i = 0;
  while (i < str.length) {
    if (!isNaN(Number(str[i]))) {
      let currStr = "";
      while (!isNaN(Number(str[i]))) {
        currStr += str[i];
        i++;
      }

      resArr.push(Number(currStr));
    } else {
      resArr.push(str[i]);
      i++;
    }
  }
  return resArr;
}



const arrOpOr = [];

function evaluatePost(prefix) {
  const stack = [];

  for (let i = 0; i < prefix.length; i++) {
    let token = prefix[i];
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;
      switch (token) {
        case "+":
          result = operand1 + operand2;
          stack.push(result);
          break;
        case "-":
          result = operand1 - operand2;
          stack.push(result);
          break;
        case "*":
          result = operand1 * operand2;
          stack.push(result);
          break;
        case "/":
          result = operand1 / operand2;
          stack.push(result);
          break;
        case "%":
          result = operand1 % operand2;
          stack.push(result);
          break;
      }
      return result;
    }
  }
}
// Driver code
let str = "(5+5*(335-1)+4)";




function addToScreen(val) {
  calculatorDisplay.value += val;
}

function clearScreen(val) {
  calculatorDisplay.value = val;
}
form.addEventListener('submit', handleForm);
function handleForm(event) { event.preventDefault(); submit(); }
function submit() {

  let exp = calculatorDisplay.value;
  exp = strToArray(exp);
  infixToPostfix(exp);
  calculatorDisplay.value = evaluatePost((infixToPostfix(exp)));
}

// console.log(eval("( ( ( 4 + 4 ) / 4 ) + ( 75 % 3 ) )"));
