# Lecture 8: Fetch API and Asynchronous JavaScript

## Topics Covered:

### Introduction to Asynchronous Programming

Asynchronous programming allows you to execute tasks without blocking the main thread. This is essential for tasks like network requests, where you don't want the user interface to freeze while waiting for a response.

### Using the Fetch API to Make HTTP Requests

The Fetch API provides a modern way to make network requests. It returns a promise that resolves to the response of the request.

#### Example

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### Handling Promises with `.then()` and `async/await`

#### Using `.then()`

Promises can be handled using the `.then()` method, which takes two arguments: a callback for a successful response and a callback for an error.

#### Example

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### Using `async/await`

`async/await` provides a cleaner and more readable way to work with promises. The `await` keyword pauses the execution of the function until the promise is resolved.

#### Example

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

## Practice Assignment

### Assignment 1: Write a Script to Fetch Data from a Public API and Display It on the Page

Create an HTML file and a script to fetch data from a public API and display it.

### Assignment 2: Create a Function that Uses `async/await` to Fetch and Log Data

Rewrite the previous example using `async/await`.

### Assignment 3: Handle Errors Gracefully When Making Network Requests

Enhance the previous example to display an error message on the page if the fetch request fails.
By completing these assignments, you will practice using the Fetch API, handling promises with `.then()` and `async/await`, and implementing error handling in asynchronous JavaScript code. These skills are crucial for making network requests and building dynamic web applications.