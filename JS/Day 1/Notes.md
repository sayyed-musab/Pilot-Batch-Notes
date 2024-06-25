# Lecture 1: Introduction to JavaScript

## Topics Covered:

### What is JavaScript and Its Role in Web Development

JavaScript is a versatile, high-level programming language primarily used to create and control dynamic website content, like interactive forms, animations, and complex user interactions. It allows developers to implement complex features on web pages and is an essential part of web development alongside HTML and CSS.

- **Client-side scripting**: Runs directly in the browser without requiring server interaction.
- **Enhances user experience**: Allows for dynamic content updates, form validation, animations, and more.

### Basic Syntax: Variables, Data Types, and Operators

#### Variables

Variables store data values and are declared using `var`, `let`, or `const`.

```javascript
let name = "John";  // String
let age = 25;       // Number
let isStudent = true;  // Boolean
```

#### Data Types

JavaScript supports various data types, including:

- **String**: Text data
- **Number**: Numeric data
- **Boolean**: True or false
- **Object**: Complex data structures
- **Array**: List of values

#### Operators

JavaScript supports various operators for performing operations on variables and values:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

### Including JavaScript in HTML

JavaScript can be included in HTML in three main ways:

1. **Inline JavaScript**: Directly within HTML elements using the `onclick`, `onload`, etc., attributes.
2. **Internal JavaScript**: Using the `<script>` tag within the HTML document.
3. **External JavaScript**: Linking an external JavaScript file using the `<script>` tag.

#### Example of Including JavaScript

1. **Inline JavaScript**

```html
<button onclick="alert('Hello, World!')">Click Me</button>
```

2. **Internal JavaScript**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript</title>
    <script>
        function showMessage() {
            alert('Hello, World!');
        }
    </script>
</head>
<body>
    <button onclick="showMessage()">Click Me</button>
</body>
</html>
```

3. **External JavaScript**

```html
<!-- HTML file -->
<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="showMessage()">Click Me</button>
</body>
</html>
```

```javascript
// script.js
function showMessage() {
    alert('Hello, World!');
}
```

## Practice Assignment

### Assignment 1: Create a JavaScript File and Link It to Your HTML Document

1. Create an HTML file and link an external JavaScript file.

2. Create the `script.js` file.

### Assignment 2: Declare Variables of Different Data Types (String, Number, Boolean)

Declare variables in the `script.js` file.

### Assignment 3: Perform Basic Arithmetic Operations and Display the Results Using `alert()`

Perform arithmetic operations and display the results using `alert()`.

By completing these assignments, you will have practiced linking an external JavaScript file to an HTML document, declaring variables of different data types, and performing basic arithmetic operations. These are fundamental skills for using JavaScript in web development.