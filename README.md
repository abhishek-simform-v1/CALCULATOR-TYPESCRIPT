# CALCULATOR TYPESCRIPT

Scientific Calculator
This is a simple scientific calculator function written in JavaScript that can evaluate mathematical expressions with the following operators:

### Addition (+)

### Subtraction (-)

### Multiplication (\*)

### Division (/)

### Modulus (%)

### Exponentiation (^)

### Square Root (√)

### Nth Root (n√)

Function Signature
javascript
Copy code
function calculate(expression: string): number
How It Works
The calculate function is the main function that performs the calculations.

# trimSpaces Function

This function removes all spaces from the input string. It is used to prepare the input string for processing.

# cal Function

This function takes a stack, a current number, and a sign. It performs the appropriate operation based on the sign and the current number, and updates the stack.

# calculate Function

This is the main function that takes an input string and performs the calculation. It first calls the trimSpaces function to remove all spaces from the input string. It then initializes two stacks - stack and stackSignPair - and a variable sign.

### The function loops through each character in the input string. If the character is a number, it extracts the entire number and calls the cal function to perform the appropriate operation based on the current sign. If the character is a left parenthesis, it pushes the current stack and sign onto the stackSignPair stack, and then initializes a new stack and sets the sign to +. If the character is a right parenthesis, it extracts the current number from the stack and pops the previous stack and sign from the stackSignPair stack. It then calls the cal function to perform the appropriate operation based on the current sign. If the character is an operator, it sets the sign to the current character.

Finally, the function reduces the stack to a single value and returns that value as the result of the calculation.
