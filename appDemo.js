// // // // calculator screen
// // const calculatorDisplay = document.querySelector(".display-container");
// // // numbers
// // const zero = document.querySelector("#zero");
// // const one = document.querySelector("#one");
// // const two = document.querySelector("#two");
// // const three = document.querySelector("#three");
// // const four = document.querySelector("#four");
// // const five = document.querySelector("#five");
// // const six = document.querySelector("#six");
// // const seven = document.querySelector("#seven");
// // const eight = document.querySelector("#eight");
// // const nine = document.querySelector("#nine");
// // // operator
// // const openParenthesis = document.querySelector("#opened-parenthesis");
// // const closedParenthesis = document.querySelector("#closed-parenthesis");
// // const eraseAll = document.querySelector("#erase-all-sign");
// // const eraseButton = document.querySelector("#erase-button");
// // const divideButton = document.querySelector("#split-operator");
// // const multiplicationButton = document.querySelector("#multiplication-operator");
// // const lessButton = document.querySelector("#less-operator");
// // const plusButton = document.querySelector("#plus-operator");
// // const decimalButton = document.querySelector("#decimal-operator");
// // const equalButton = document.querySelector("#equal-button");

// // function ik(val) {
// //   document.getElementById("one").value = val;
// // }

// // const mydropdown = document.querySelector(".dropdown-menu-scitific");

// // function drop() {
// //   // mydropdown.classList.remove("hide")
// //   console.log("hi");
// //   mydropdown.classList.contains("hide")
// //     ? mydropdown.classList.remove("hide")
// //     : mydropdown.classList.add("hide");
// // }
// // const mydropdownfunc = document.querySelector(".d-function");

// // function dropf() {
// //   // mydropdown.classList.remove("hide")
// //   console.log("hi");
// //   mydropdownfunc.classList.contains("hide")
// //     ? mydropdownfunc.classList.remove("hide")
// //     : mydropdownfunc.classList.add("hide");
// // }
// // const handleValue = (val) => {
// //   console.log(val);
// // };

// // let inputUser = "5 + 5";
// // const handleString = (str) => {
// //   return inputString.push(str);
// // };
// // let inputString = [];
// // handleString(inputUser);

// // let deffInputstring = [];
// // let newInput = [];
// // for (i = 0; i < inputString.length; i++) {
// //   newInput = inputString[i].split("");
// // }
// // console.log(newInput);
// // for (j = 0; j < newInput.length; j++) {
// //   if (newInput[j] === "(" || newInput[j] === ")") {
// //     deffInputstring.push(newInput[j]);
// //   }
// // }

// // console.log(deffInputstring);

// // // Function to check if
// // // given character is
// // // an operator or not.
// // function CalckOp(c) {
// //   return (
// //     !(c >= "a" && c <= "z") &&
// //     !(c >= "0" && c <= "9") &&
// //     !(c >= "A" && c <= "Z")
// //   );
// // }

// // // Function to find priority
// // // of given operator.
// // function getPriority(C) {
// //   switch (C) {
// //     case "log":
// //       return 4;
// //     case "^":
// //       return 3;
// //     case "*":
// //       return 2;
// //     case "√":
// //       return 3;
// //     case "/":
// //       return 2;
// //     case "%":
// //       return 2;
// //     case "+":
// //       return 1;
// //     case "-":
// //       return 1;
// //     default:
// //       return 0;
// //   }
// //   return 0;
// // }

// // // Function that converts infix
// // // expression to prefix expression.
// // function infixToPrefix(infix) {
// //   // Operator stack
// //   let operators = [];

// //   // Operands stack.
// //   let operands = [];

// //   for (let i = 0; i < infix.length; i++) {
// //     // If current character is an opening bracket, then push into the operators stack.
// //     if (infix[i] == "(") {
// //       operators.push(infix[i]);
// //     }

// //     // If current character is a closing bracket, then pop from both stacks and push result in operands stack until matching opening bracket is not found.
// //     else if (infix[i] == ")") {
// //       while (operators.length != 0 && operators[operators.length - 1] != "(") {
// //         // operand 1
// //         let op1 = operands.pop();

// //         // operand 2
// //         let op2 = operands.pop();

// //         // operator
// //         let op = operators.pop();

// //         // Add operands and operator
// //         // in form operator +
// //         // operand1 + operand2.
// //         let tmp = op + op2 + op1;
// //         operands.push(tmp);
// //       }

// //       // Pop opening bracket
// //       // from stack.
// //       operators.pop();
// //     }

// //     // If current character is an
// //     // operand then push it into
// //     // operands stack.
// //     else if (!CalckOp(infix[i])) {
// //       operands.push(infix[i] + "");
// //     }

// //     // If current character is an
// //     // operator, then push it into
// //     // operators stack after popping
// //     // high priority operators from
// //     // operators stack and pushing
// //     // result in operands stack.
// //     else {
// //       while (
// //         operators.length &&
// //         getPriority(infix[i]) <= getPriority(operators[operators.length - 1])
// //       ) {
// //         let op1 = operands.pop();

// //         let op2 = operands.pop();

// //         let op = operators.pop();

// //         let tmp = op + op2 + op1;
// //         operands.push(tmp);
// //       }

// //       operators.push(infix[i]);
// //     }
// //   }

// //   // Pop operators from operators
// //   // stack until it is empty and
// //   // operation in add result of
// //   // each pop operands stack.
// //   while (operators.length != 0) {
// //     let op1 = operands.pop();

// //     let op2 = operands.pop();

// //     let op = operators.pop();

// //     let tmp = op + op2 + op1;
// //     operands.push(tmp);
// //   }

// //   // Final prefix expression is
// //   // present in operands stack.
// //   return operands[operands.length - 1];
// // }

// // // Javascript program to evaluate a prefix expression.

// // function isOperand(c) {
// //   // If the character is a digit
// //   // then it must be an operand
// //   if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57) return true;
// //   else return false;
// // }

// // function evaluatePrefix(exprsn) {
// //   let Stack = [];

// //   for (let j = exprsn.length - 1; j >= 0; j--) {
// //     // Push operand to Stack
// //     // To convert exprsn[j] to digit subtract
// //     // '0' from exprsn[j].
// //     if (isOperand(exprsn[j])) Stack.push(exprsn[j].charCodeAt() - 48);
// //     else {
// //       // Operator encountered
// //       // Pop two elements from Stack
// //       let o1 = Stack[Stack.length - 1];
// //       Stack.pop();
// //       let o2 = Stack[Stack.length - 1];
// //       Stack.pop();

// //       // Use switch case to operate on o1
// //       // and o2 and perform o1 Or o2.
// //       switch (exprsn[j]) {
// //         case "+":
// //           Stack.push(o1 + o2);
// //           break;
// //         case "-":
// //           Stack.push(o1 - o2);
// //           break;
// //         case "*":
// //           Stack.push(o1 * o2);
// //           break;
// //         case "/":
// //           Stack.push(o1 / o2);
// //           break;
// //         case "%":
// //           Stack.push(o1 % o2);
// //           break;
// //       }
// //     }
// //   }

// //   return Stack[Stack.length - 1];
// // }
// // // Driver code
// // let str = prompt('Enter The String');
// // console.log(evaluatePrefix(infixToPrefix(str)));
// // // This code is contributed by avanitrachhadiya2155
// function infixToPrefix(infix) {
//   // Step 1: Reverse the infix expression.
//   const reversed = infix.split("").reverse().join("");

//   // Step 2: Convert each token of the reversed infix expression to its corresponding prefix notation.
//   let output = "";
//   const stack = [];
//   const operators = {
//     "+": 1,
//     "-": 1,
//     "*": 2,
//     "/": 2,
//     "%": 2,
//     "^": 3,
//   };

//   for (let i = 0; i < reversed.length; i++) {
//     const token = reversed[i];

//     if (!isNaN(token) || /[a-zA-Z]/.test(token)) {
//       // If the token is an operand, add it to the output string.
//       output += token;
//     } else if (token === "(") {
//       // If the token is a left parenthesis, push it onto the stack.
//       stack.push(token);
//     } else if (token in operators || token === ")") {
//       // If the token is an operator or a right parenthesis:
//       if (token === ")") {
//         // If the token is a right parenthesis, pop operators from the stack and add them to the output string until you reach a left parenthesis.
//         while (stack.length > 0 && stack[stack.length - 1] !== "(") {
//           output += stack.pop();
//         }
//         stack.pop(); // Pop the left parenthesis from the stack.
//       } else {
//         // If the token is an operator, pop operators from the stack and add them to the output string until you reach a left parenthesis or an operator with lower precedence.
//         while (
//           stack.length > 0 &&
//           stack[stack.length - 1] !== "(" &&
//           operators[stack[stack.length - 1]] >= operators[token]
//         ) {
//           output += stack.pop();
//         }
//         stack.push(token); // Push the current operator onto the stack.
//       }
//     }
//   }

//   // Pop any remaining operators from the stack and add them to the output string.
//   while (stack.length > 0) {
//     output += stack.pop();
//   }

//   // Step 3: Reverse the output string to get the prefix expression.
//   return output.split("").reverse().join("");
// }
// const infix = "(4+4)/4+75%2";
// const prefix = infixToPrefix(infix);
// console.log(prefix); // Output: +/+444%753
function evaluatePrefix(prefix) {
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
let strs = "(5+5*(335-1)+4)";
evaluatePrefix([4, 4, "+", 4, "/", 75, 3, "%", "+"]);
console.log();

// console.log(eval("( ( ( 4 + 4 ) / 4 ) + ( 75 % 3 ) )"));
