# Lecture 4: Objects and Arrays

## Topics Covered:

### Introduction to Objects: Properties and Methods

Objects are collections of related data and functionality. They are composed of properties (data) and methods (functions).

#### Creating an Object

```javascript
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

console.log(book.title);  // Output: To Kill a Mockingbird
console.log(book.getSummary());  // Output: To Kill a Mockingbird was written by Harper Lee in 1960.
```

### Working with Arrays: Creation, Manipulation, and Iteration

Arrays are used to store multiple values in a single variable. They are a special type of object.

#### Creating an Array

```javascript
let movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
console.log(movies[0]);  // Output: The Shawshank Redemption
```

### Common Array Methods: push, pop, shift, unshift, forEach

#### push

Adds one or more elements to the end of an array.

```javascript
movies.push("Pulp Fiction");
console.log(movies);  // Output: ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction"]
```

#### pop

Removes the last element from an array.

```javascript
movies.pop();
console.log(movies);  // Output: ["The Shawshank Redemption", "The Godfather", "The Dark Knight"]
```

#### shift

Removes the first element from an array.

```javascript
movies.shift();
console.log(movies);  // Output: ["The Godfather", "The Dark Knight"]
```

#### unshift

Adds one or more elements to the beginning of an array.

```javascript
movies.unshift("Inception");
console.log(movies);  // Output: ["Inception", "The Godfather", "The Dark Knight"]
```

#### forEach

Executes a provided function once for each array element.

```javascript
movies.forEach(function(movie) {
    console.log(movie);
});
// Output:
// Inception
// The Godfather
// The Dark Knight
```

## Practice Assignment

### Assignment 1: Create an Object to Represent a Book with Properties Like Title, Author, and Year

Create an object in `script.js` to represent a book.


### Assignment 2: Write a Script to Store a List of Your Favorite Movies in an Array and Display Them

Create an array of favorite movies and display them.

### Assignment 3: Implement a Function that Adds a New Item to an Array and Prints the Updated Array

Create a function to add a new item to an array and print the updated array.

By completing these assignments, you will have practiced creating and manipulating objects and arrays, and using common array methods. These are essential skills for working with complex data structures in JavaScript.