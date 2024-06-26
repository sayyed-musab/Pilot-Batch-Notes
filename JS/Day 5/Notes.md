# Lecture 5: DOM Manipulation

## Topics Covered:

### What is the DOM and Its Importance

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programs to manipulate the document's structure, style, and content.

- **Importance**: 
  - Enables dynamic content updates.
  - Allows interaction with user inputs.
  - Provides a way to manipulate HTML and CSS using JavaScript.

### Selecting and Manipulating DOM Elements Using JavaScript

#### Selecting Elements

Elements can be selected using various methods:

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`

#### Example

```javascript
// Select element by ID
let paragraph = document.getElementById("myParagraph");

// Select elements by class name
let buttons = document.getElementsByClassName("myButton");

// Select elements by tag name
let divs = document.getElementsByTagName("div");

// Select element using querySelector
let header = document.querySelector("h1");

// Select all elements using querySelectorAll
let listItems = document.querySelectorAll("li");
```

#### Manipulating Elements

Elements can be manipulated by changing their properties, attributes, or styles.

```javascript
// Change content
paragraph.textContent = "New content";

// Change style
paragraph.style.color = "blue";

// Change attribute
paragraph.setAttribute("class", "highlight");
```

### Event Handling: addEventListener, Common Events (click, mouseover)

#### addEventListener

`addEventListener` is used to attach an event handler to an element.

```javascript
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

#### Common Events

- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `load`

## Practice Assignment

### Assignment 1: Write a Script to Change the Content of a Paragraph When a Button is Clicked

Create an HTML file with a button and a paragraph, and add a script to change the paragraph's content when the button is clicked.

### Assignment 2: Create an Interactive List Where Items Can Be Added or Removed Dynamically

Create an HTML file with an input field, add and remove buttons, and a list. Add a script to add and remove list items dynamically.

### Assignment 3: Implement a Simple Image Slider Using DOM Manipulation and Events

Create an HTML file with an image element and next/prev buttons. Add a script to create a simple image slider.

By completing these assignments, you will have practiced selecting and manipulating DOM elements, handling events, and using JavaScript to create interactive web pages. These are essential skills for creating dynamic and responsive user interfaces.