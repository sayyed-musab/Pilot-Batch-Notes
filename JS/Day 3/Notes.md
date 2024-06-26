# Lecture 3: Functions

## Topics Covered:

### What are Functions and Why Use Them

Functions are reusable blocks of code designed to perform a specific task. They help in organizing code, making it more readable and maintainable, and allow for code reuse, reducing redundancy.

### Defining and Calling Functions

#### Defining a Function

Functions are defined using the `function` keyword, followed by a name, parentheses (which may include parameters), and a block of code.

```javascript
function greet() {
    console.log("Hello, World!");
}
```

#### Calling a Function

Functions are called by their name followed by parentheses.

```javascript
greet();  // Output: Hello, World!
```

### Parameters and Return Values

Functions can accept parameters and return values.

#### Parameters

Parameters are variables listed as a part of the function definition.

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");  // Output: Hello, Alice!
```

#### Return Values

Functions can return values using the `return` statement.

```javascript
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);  // sum is 8
```

## Practice Assignment

### Assignment 1: Write a Function that Takes Two Numbers and Returns Their Sum

Create a function in `script.js` that takes two numbers as parameters and returns their sum.

### Assignment 2: Create a Function that Checks if a Given String is a Palindrome

A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

### Assignment 3: Develop a Function to Calculate the Factorial of a Number

The factorial of a number is the product of all positive integers less than or equal to that number.


By completing these assignments, you will have practiced defining and calling functions, using parameters and return values, and applying functions to solve practical problems. These are crucial skills for writing modular and maintainable code in JavaScript.