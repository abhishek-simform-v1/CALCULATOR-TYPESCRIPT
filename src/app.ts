// // calculator screen
const calculatorDisplay: HTMLInputElement =
  document.querySelector('.display-container')!;
const calculatedDisplay: HTMLInputElement = document.querySelector(
  '.calculated-container'
)!;
const form: HTMLElement = document.getElementById('myForm')!;
const mydropDownMenu: HTMLButtonElement = document.querySelector(
  '.dropdown-menu-scitific'
)!;
const mydropdown: HTMLElement = document.getElementById(
  'my-dropdown-Scintific'
)!;
const mydropdownfunc: HTMLButtonElement | Element | undefined = document.querySelector('.d-function')!;
const dropdownFunctions: NodeListOf<Element> | undefined = document.querySelectorAll(
  '.calculator-tf-trigonometry'
)!;

const dropdownTriangle: Element | undefined = dropdownFunctions[0];
const dropdownFunction = dropdownFunctions[1];

const dropdownModalTriangle: HTMLInputElement = document.querySelector(
  '.calculator-tf-modal-1'
)!;
const dropdownModalFunction: HTMLInputElement = document.querySelector(
  '.calculator-tf-modal-2'
)!;
const error: HTMLElement = document.getElementById('error')!;

let evalutedResult: number;
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
function trimSpaces(str: string): string {
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
function cal(stack: number[], currentNumber: number, sign: string): void {
  switch (sign) {
    case "+":
      // Addition operation
      stack.push(currentNumber); // Add current number to the stack
      break;

    case '-':
      // Subtraction operation
      stack.push(-currentNumber); // Add negative of current number to the stack
      break
    case "/":
      // Division operation
      stack.push(stack.pop()! / currentNumber); // Divide top of the stack by current number and add to stack
      break;
    case "*":
      // Multiplication operation
      stack.push(stack.pop()! * currentNumber); // Multiply top of the stack by current number and add to stack
      break;
    case "%":
      // Modulo operation
      stack.push(stack.pop()! % currentNumber); // Modulo top of the stack by current number and add to stack
      break;
    case "^":
      // Exponentiation operation
      stack.push(Math.pow(stack.pop()!, currentNumber)); // Raise top of the stack to the power of current number and add to stack
      break;
    case "√":
      // root base operation
      let operand = 1 / stack.pop()!; // Take inverse of the top of the stack
      stack.push(Number(Math.pow(currentNumber, operand).toFixed(3))); // Raise current number to the power of the inverse and add to stack
      break;
    case "g":
      // root base operation
      // log operation
      stack.push((Math.log(stack.pop()!) / Math.log(currentNumber)));
      break;
    default:
      break;
  }

}

function calculate(expression: string): number {
  // Trim any whitespace from the input string
  expression = trimSpaces(expression);

  // Initialize a stack to hold numbers, a stack to hold sign pairs, and a default sign of '+'
  let stack: number[] = [];
  let stackSignPair: (number[] | string)[][] = [];
  let sign: string;
  sign = '+'

  // Loop through each character in the expression
  for (let i: number = 0; i < expression.length; i++) {
    // If the character is a number or decimal point, keep adding to the current number until a non-number character is encountered
    if (!isNaN(Number(expression[i]))) {
      let currentNumber: number | string = '';
      while (!isNaN(Number(expression[i])) || expression[i] === '.') {
        currentNumber += expression[i];
        i++;
      }
      i--;
      currentNumber = Number(currentNumber);

      // Use the current sign to perform the appropriate calculation and add to the stack
      cal(stack, currentNumber, sign);

      // If the character is an opening parenthesis, push the current stack and sign onto the sign pair stack and reset the current stack and sign
    } else if (expression[i] === '(') {
      stackSignPair.push([stack, sign]);
      stack = [];
      sign = '+';

      // If the character is a closing parenthesis, reduce the current stack to a single number and pop the last sign pair from the sign pair stack to continue the calculation
    } else if (expression[i] === ')') {
      let currentNumber = stack.reduce(
        (acc: number, curr: number) => (acc += curr),
        0
      );
      let getPair = stackSignPair.pop()! as [number[], string] | undefined;
      if (getPair) {
        [stack, sign] = getPair;
      }

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

function addToScreen(val: string): void {
  calculatorDisplay.value += val;
  focusingonInput()
}
// delete function

function deletVal(): void {
  calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}

function clearScreen(val: string) {
  calculatorDisplay.value = val;
}
form.addEventListener('submit', handleForm);

function handleForm(event?: Event) {
  if (event) {
    event.preventDefault();
    submit();
    // rest of your code here
  }
}

function extractMathematicalExpression(inputString: string): string | never {
  const pattern = /^[\d+\-/*^()√log\s]+$/; // regular expression pattern to match only numbers and the specified operators
  const matches = inputString.match(pattern);

  if (matches !== null && matches[0] === inputString) {
    // if the entire input string matches the pattern, return it
    return inputString;
  } else {
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
function submit(): number | never {

  evalutedResult = calculate(extractMathematicalExpression(calculatorDisplay.value));

  if (isNaN(evalutedResult)) {
    calculatorDisplay.value = '';
    error.style.color = '#ff0000';
    error.innerHTML = '<p>not a number</p>';
    setTimeout(() => {
      error.innerHTML = '';
    }, 1000);
    const _exhaustiveCheck: never = evalutedResult as never
    throw new Error(`Unknown type ${_exhaustiveCheck}`)
  } else {
    calculatorDisplay.value = evalutedResult.toString();
    return evalutedResult;
  }
}
document.onkeydown = function (ev: KeyboardEvent): void {
  if (ev.key == 'Enter') {
    ev.preventDefault();
    submit();
  }
};
