# CALCULATOR

Scientific Calculator
This is a simple scientific calculator function written in JavaScript that can evaluate mathematical expressions with the following operators:

Addition (+)
Subtraction (-)
Multiplication (\*)
Division (/)
Modulus (%)
Exponentiation (^)
Square Root (√)
Nth Root (n√)
Function Signature
javascript
Copy code
function calculate(expression: string): number
How it Works
The calculate function takes in a string expression and returns the calculated value as a number. Here's how the function works:

The trimSpaces function is called to remove any spaces from the expression.
An empty stack array and a stackSignPair array are created to store values and signs respectively.
A sign variable is set to "+" as the default sign.
A loop is executed for each character in the expression.
If the character is a number, the currentNumber variable is initialized to an empty string and a while loop is executed to extract the entire number from the expression. The extracted number is then converted to a number using the Number function and the cal function is called with the stack, currentNumber, and sign as arguments.
If the character is an opening parenthesis, the current stack and sign are pushed into the stackSignPair array and a new empty stack is created with the sign set to "+" as the default.
If the character is a closing parenthesis, the current stack is reduced to a single value using the reduce method and the last stack and sign are popped from the stackSignPair array. The cal function is then called with the stack, currentNumber, and sign as arguments.
If the character is an operator, the sign is set to the current character.
After the loop is finished, the remaining values in the stack are reduced to a single value using the reduce method and returned as the result.
How to Use
To use the calculate function, simply call the function with a string expression as the argument:

javascript
Copy code
const result = calculate("2 + 3 _ (5 - 2)"); // result is 17
Examples
javascript
Copy code
const result1 = calculate("2 + 3 _ (5 - 2)"); // result1 is 17
const result2 = calculate("10 / 2 + 3 ^ 2"); // result2 is 19
const result3 = calculate("√16 + 3 _ 2"); // result3 is 10
const result4 = calculate("2 _ 3 √27"); // result4 is 18
