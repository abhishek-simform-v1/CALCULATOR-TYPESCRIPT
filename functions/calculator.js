// This function removes all spaces from a string
function trimSpaces(str) {
     let newStr = "";
     let i = 0;
     while (i < str.length) {
          if (str[i] !== " ") { // Check if current character is not a space
               newStr += str[i]; // If not a space, add to new string
          }
          i++; // Move to the next character in the string
     }
     return newStr;
}

// This function performs the arithmetic operation based on the sign
function cal(stack, currentNumber, sign) {
     if (sign === "+") { // Addition operation
          stack.push(currentNumber); // Add current number to the stack
     } else if (sign === "-") { // Subtraction operation
          stack.push(-currentNumber); // Add negative of current number to the stack
     } else if (sign === "/") { // Division operation
          stack.push(stack.pop() / currentNumber); // Divide top of the stack by current number and add to stack
     } else if (sign === "*") { // Multiplication operation
          stack.push(stack.pop() * currentNumber); // Multiply top of the stack by current number and add to stack
     } else if (sign === "%") { // Modulo operation
          stack.push(stack.pop() % currentNumber); // Modulo top of the stack by current number and add to stack
     } else if (sign === "^") { // Exponentiation operation
          stack.push(Math.pow(stack.pop(), currentNumber)); // Raise top of the stack to the power of current number and add to stack
     } else if (sign === "√") { // Square root operation
          if (sign == "√") { // Check if it is a square root operation
               stack.push(Math.sqrt(currentNumber)); // Add square root of current number to the stack
          } else { // Otherwise, it is a nth root operation
               let operand = 1 / stack.pop(); // Take inverse of the top of the stack
               stack.push(Math.pow(currentNumber, operand)); // Raise current number to the power of the inverse and add to stack
          }
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