"use strict";
// // calculator screen
const calculatorDisplay = document.querySelector('.display-container');
const calculatedDisplay = document.querySelector('.calculated-container');
const form = document.getElementById('myForm');
const mydropDownMenu = document.querySelector('.dropdown-menu-scitific');
const mydropdown = document.getElementById('my-dropdown-Scintific');
const mydropdownfunc = document.querySelector('.d-function');
const dropdownFunctions = document.querySelectorAll('.calculator-tf-trigonometry');
const dropdownTriangle = dropdownFunctions[0];
const dropdownFunction = dropdownFunctions[1];
const dropdownModalTriangle = document.querySelector('.calculator-tf-modal-1');
const dropdownModalFunction = document.querySelector('.calculator-tf-modal-2');
const error = document.getElementById('error');
let evalutedResult;
if (dropdownModalFunction != null && dropdownModalTriangle != null && dropdownTriangle != undefined && dropdownFunction != undefined) {
    dropdownTriangle.addEventListener('click', () => {
        dropdownModalTriangle.classList.contains('hide')
            ? dropdownModalTriangle.classList.remove('hide')
            : dropdownModalTriangle.classList.add('hide');
        if (!dropdownModalFunction.classList.contains('hide')) {
            dropdownModalFunction.classList.add('hide');
        }
    });
    dropdownFunction.addEventListener('click', () => {
        dropdownModalFunction.classList.contains('hide')
            ? dropdownModalFunction.classList.remove('hide')
            : dropdownModalFunction.classList.add('hide');
        if (!dropdownModalTriangle.classList.contains('hide')) {
            dropdownModalTriangle.classList.add('hide');
        }
    });
}
// This function removes all spaces from a string
function trimSpaces(str) {
    let newStr = '';
    let i = 0;
    while (i < str.length) {
        if (str[i] !== ' ') {
            // Check if current character is not a space
            newStr += str[i]; // If not a space, add to new string
        }
        i++; // Move to the next character in the string
    }
    return newStr;
}
// This function performs the arithmetic operation based on the sign
function cal(stack, currentNumber, sign) {
    switch (sign) {
        case "+":
            // Addition operation
            stack.push(currentNumber); // Add current number to the stack
            break;
        case '-':
            // Subtraction operation
            stack.push(-currentNumber); // Add negative of current number to the stack
            break;
        case "/":
            // Division operation
            stack.push(stack.pop() / currentNumber); // Divide top of the stack by current number and add to stack
            break;
        case "*":
            // Multiplication operation
            stack.push(stack.pop() * currentNumber); // Multiply top of the stack by current number and add to stack
            break;
        case "%":
            // Modulo operation
            stack.push(stack.pop() % currentNumber); // Modulo top of the stack by current number and add to stack
            break;
        case "^":
            // Exponentiation operation
            stack.push(Math.pow(stack.pop(), currentNumber)); // Raise top of the stack to the power of current number and add to stack
            break;
        case "√":
            // root base operation
            let operand = 1 / stack.pop(); // Take inverse of the top of the stack
            stack.push(Number(Math.pow(currentNumber, operand).toFixed(3))); // Raise current number to the power of the inverse and add to stack
            break;
        case "g":
            // root base operation
            // log operation
            stack.push((Math.log(stack.pop()) / Math.log(currentNumber)));
            break;
        default:
            break;
    }
}
function calculate(expression) {
    // Trim any whitespace from the input string
    expression = trimSpaces(expression);
    // Initialize a stack to hold numbers, a stack to hold sign pairs, and a default sign of '+'
    let stack = [];
    let stackSignPair = [];
    let sign;
    sign = '+';
    // Loop through each character in the expression
    for (let i = 0; i < expression.length; i++) {
        // If the character is a number or decimal point, keep adding to the current number until a non-number character is encountered
        if (!isNaN(Number(expression[i]))) {
            let currentNumber = '';
            while (!isNaN(Number(expression[i])) || expression[i] === '.') {
                currentNumber += expression[i];
                i++;
            }
            i--;
            currentNumber = Number(currentNumber);
            // Use the current sign to perform the appropriate calculation and add to the stack
            cal(stack, currentNumber, sign);
            // If the character is an opening parenthesis, push the current stack and sign onto the sign pair stack and reset the current stack and sign
        }
        else if (expression[i] === '(') {
            stackSignPair.push([stack, sign]);
            stack = [];
            sign = '+';
            // If the character is a closing parenthesis, reduce the current stack to a single number and pop the last sign pair from the sign pair stack to continue the calculation
        }
        else if (expression[i] === ')') {
            let currentNumber = stack.reduce((acc, curr) => (acc += curr), 0);
            let getPair = stackSignPair.pop();
            if (getPair) {
                [stack, sign] = getPair;
            }
            // Use the popped sign to perform the appropriate calculation and add to the stack
            cal(stack, currentNumber, sign);
            // Otherwise, update the current sign
        }
        else {
            sign = expression[i];
        }
    }
    // Reduce the final stack to a single number and return it
    let result = stack.reduce((acc, curr) => (acc += curr), 0);
    return result;
}
function addToScreen(val) {
    calculatorDisplay.value += val;
    focusingonInput();
}
// delete function
function deletVal() {
    calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}
function clearScreen(val) {
    calculatorDisplay.value = val;
}
form.addEventListener('submit', handleForm);
function handleForm(event) {
    if (event) {
        event.preventDefault();
        submit();
        // rest of your code here
    }
}
function extractMathematicalExpression(inputString) {
    const pattern = /^(\d+\.?\d*|\+|\-|\*|\/|\^|\%|log|e|√|\(|\)|FeFunc)+$/g; // regular expression pattern to match only numbers and the specified operators
    const matches = inputString.match(pattern);
    if (matches !== null && matches[0] === inputString) {
        // if the entire input string matches the pattern, return it
        return inputString;
    }
    else {
        calculatorDisplay.value = '';
        error.style.color = '#ff0000';
        error.innerHTML = '<p>not a number</p>';
        setTimeout(() => {
            error.innerHTML = '';
        }, 1000);
        // otherwise, throw an error
        throw new Error("Invalid input: the expression contains characters that are not numbers or the allowed operators.");
    }
}
function areBracketsBalanced(expr) {
    // initialize an empty stack
    let stack = [];
    // loop through every character of the expression
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];
        // check if the current character is a bracket
        if (x !== '(' && x !== ')') {
            // if not a bracket, continue to the next character
            continue;
        }
        // check if the current character is an opening bracket
        if (x == '(') {
            // push the opening bracket to the stack
            stack.push(x);
            continue;
        }
        // if the current character is a closing bracket
        else if (stack.length && x === ')') {
            // remove the last opening bracket from the stack
            stack.pop();
        }
        // if the stack is empty and there is a closing bracket, brackets are not balanced
        else {
            return false;
        }
    }
    // if the stack is empty, brackets are balanced, else not
    return stack.length === 0;
}
function submit() {
    if (areBracketsBalanced((calculatorDisplay.value))) {
        evalutedResult = calculate(extractMathematicalExpression(calculatorDisplay.value));
        console.log("Hello");
    }
    if (isNaN(evalutedResult)) {
        calculatorDisplay.value = '';
        error.style.color = '#ff0000';
        error.innerHTML = '<p>not a number</p>';
        setTimeout(() => {
            error.innerHTML = '';
        }, 1000);
        const _exhaustiveCheck = evalutedResult;
        throw new Error(`Unknown type ${_exhaustiveCheck}`);
    }
    else {
        calculatorDisplay.value = evalutedResult.toString();
        return evalutedResult;
    }
}
document.onkeydown = function (ev) {
    if (ev.key == 'Enter') {
        ev.preventDefault();
        submit();
    }
};
//# sourceMappingURL=app.js.map