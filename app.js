// // // calculator screen
// const calculatorDisplay = document.querySelector(".display-container");
// // numbers
// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// // operator
// const openParenthesis = document.querySelector("#opened-parenthesis");
// const closedParenthesis = document.querySelector("#closed-parenthesis");
// const eraseAll = document.querySelector("#erase-all-sign");
// const eraseButton = document.querySelector("#erase-button");
// const divideButton = document.querySelector("#split-operator");
// const multiplicationButton = document.querySelector("#multiplication-operator");
// const lessButton = document.querySelector("#less-operator");
// const plusButton = document.querySelector("#plus-operator");
// const decimalButton = document.querySelector("#decimal-operator");
// const equalButton = document.querySelector("#equal-button");

// function ik(val) {
//   document.getElementById("one").value = val;
// }

// const mydropdown = document.querySelector(".dropdown-menu-scitific");

// function drop() {
//   // mydropdown.classList.remove("hide")
//   console.log("hi");
//   mydropdown.classList.contains("hide")
//     ? mydropdown.classList.remove("hide")
//     : mydropdown.classList.add("hide");
// }
// const mydropdownfunc = document.querySelector(".d-function");

// function dropf() {
//   // mydropdown.classList.remove("hide")
//   console.log("hi");
//   mydropdownfunc.classList.contains("hide")
//     ? mydropdownfunc.classList.remove("hide")
//     : mydropdownfunc.classList.add("hide");
// }
// const handleValue = (val) => {
//   console.log(val);
// };

// let inputUser = "5 + 5";
// const handleString = (str) => {
//   return inputString.push(str);
// };
// let inputString = [];
// handleString(inputUser);

// let deffInputstring = [];
// let newInput = [];
// for (i = 0; i < inputString.length; i++) {
//   newInput = inputString[i].split("");
// }
// console.log(newInput);
// for (j = 0; j < newInput.length; j++) {
//   if (newInput[j] === "(" || newInput[j] === ")") {
//     deffInputstring.push(newInput[j]);
//   }
// }

// console.log(deffInputstring);

// Function to check if
// given character is
// an operator or not.

// Function that converts infix
// The main function to convert infix expression to postfix expression
console.log([4, 4, "+", 4, "/", 75, 3, "%", "+"]);
console.log("(4+4)/4+75%3");

// Function to find priority
// of given operator.

// function infixToPostfix(expression) {
//   let poststack = []; //For stack operations, we are using JavaScript built in stack
//   let perenthstack = [];
//   let result = [];

//   for (let i = 0; i < expression.length; i++) {
//     let token = expression[i];
//     if (token === "(") {
//       perenthstack.push(token);
//     } else {
//       if (getPriority(token)) {
//         poststack.push(token);
//       }
//       else if(token)
//     }
//   }
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
  return 0;
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

  console.log("result", result);
}

// If the scanned character is an
// // ‘(‘, push it to the stack.
// console.log(poststack);
// console.log(result);

// console.log(perenthstack);
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

let exp = "(4+4)/4+75%3";
exp = strToArray(exp);
infixToPostfix(exp);

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
    }
  }

  console.log("Res: ", stack.pop());
}
// Driver code
let str = "(5+5*(335-1)+4)";
evaluatePost([4, 4, "+", 4, "/", 75, 3, "%", "+"]);

// console.log(eval("( ( ( 4 + 4 ) / 4 ) + ( 75 % 3 ) )"));
