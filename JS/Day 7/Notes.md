# Lecture 7: Introduction to ES6 Features

## Topics Covered:

### ES6 Syntax and Features: `let`, `const`, Arrow Functions, Template Literals

#### `let` and `const`

- `let` and `const` are used for variable declarations.
- `let` allows you to declare variables that are block-scoped.
- `const` declares block-scoped variables that cannot be reassigned.

##### Example

```javascript
let name = "John";
const age = 30;

name = "Doe";  // Allowed
// age = 31;  // Not allowed, will throw an error
```

#### Arrow Functions

- Arrow functions provide a shorter syntax for writing functions.
- They do not have their own `this` context.

##### Example

```javascript
// Traditional function expression
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

#### Template Literals

- Template literals allow embedded expressions and multi-line strings.
- They use backticks (`) instead of single or double quotes.

##### Example

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);  // Output: Hello, John!
```

### Destructuring Objects and Arrays

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

#### Example

##### Object Destructuring

```javascript
const person = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = person;
console.log(name, age, city);  // Output: Alice 25 New York
```

##### Array Destructuring

```javascript
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);  // Output: red green blue
```

### Spread and Rest Operators

- The spread operator (`...`) expands an array or object.
- The rest operator (`...`) collects multiple elements into an array.

#### Example

##### Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);  // Output: [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);  // Output: {a: 1, b: 2, c: 3}
```

##### Rest Operator

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
```

## Practice Assignment

### Assignment 1: Rewrite an Existing Script Using `let` and `const` Instead of `var`


### Assignment 2: Use Arrow Functions to Simplify Function Expressions


### Assignment 3: Practice Destructuring by Extracting Values from an Object and Array


By completing these assignments, you will gain a solid understanding of ES6 features like `let`, `const`, arrow functions, template literals, destructuring, and the spread/rest operators. These features make your JavaScript code more concise, readable, and efficient.