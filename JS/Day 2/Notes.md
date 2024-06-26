# Lecture 2: Control Structures and Loops

## Topics Covered:

### Conditional Statements: if, else if, else

Conditional statements in JavaScript allow you to execute different code based on different conditions. The main conditional statements are `if`, `else if`, and `else`.

#### Syntax

```javascript
if (condition) {
    // Code to execute if condition is true
} else if (anotherCondition) {
    // Code to execute if anotherCondition is true
} else {
    // Code to execute if all conditions are false
}
```

#### Example

```javascript
let num = 10;

if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
```

### Loops: for, while, do-while

Loops are used to execute a block of code repeatedly as long as a specified condition is true.

#### for Loop

A `for` loop is used when the number of iterations is known.

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

#### while Loop

A `while` loop is used when the number of iterations is not known and depends on a condition.

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

#### do-while Loop

A `do-while` loop is similar to a `while` loop, but it guarantees that the loop body is executed at least once.

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

### Practical Use Cases for Loops and Conditionals

- **Conditional Statements**: Making decisions based on user input, validating form data, controlling program flow.
- **Loops**: Iterating over arrays, processing items in a list, repeating tasks.

## Practice Assignment

### Assignment 1: Write a Script that Checks if a Number is Positive, Negative, or Zero

Create a script in `script.js` to check if a number is positive, negative, or zero.

### Assignment 2: Create a Loop that Prints Numbers from 1 to 10 in the Console

Add a loop in `script.js` to print numbers from 1 to 10.

### Assignment 3: Develop a Script that Sums Numbers from 1 to 100 Using a Loop

Add a script in `script.js` to sum numbers from 1 to 100.

By completing these assignments, you will have practiced using conditional statements to make decisions, utilizing different types of loops to iterate over code blocks, and applying these concepts to practical use cases. These are essential skills for controlling program flow in JavaScript.