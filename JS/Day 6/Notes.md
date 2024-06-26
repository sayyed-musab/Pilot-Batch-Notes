# Lecture 6: Working with Forms

## Topics Covered:

### Accessing and Manipulating Form Elements with JavaScript

Form elements can be accessed and manipulated using JavaScript to create interactive and responsive forms. This involves selecting form elements and changing their properties, values, or styles.

#### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Manipulation</title>
</head>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <button type="submit">Submit</button>
    </form>

    <script>
        let form = document.getElementById("myForm");
        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");

        // Example: Change the placeholder text of the name input
        nameInput.placeholder = "Enter your name";
    </script>
</body>
</html>
```

### Form Validation Techniques

Form validation ensures that the user provides necessary and properly formatted information. It can be done using JavaScript by checking the values of form elements before submission.

#### Example

```javascript
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    
    if (nameInput.value === "" || emailInput.value === "") {
        event.preventDefault(); // Prevent form submission
        alert("Please fill out all fields.");
    }
});
```

### Handling Form Submission and Displaying Results

Handling form submission involves processing the form data and providing feedback to the user, such as displaying a confirmation message or redirecting to another page.

#### Example

```javascript
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;

    alert(`Thank you, ${nameInput}! Your email, ${emailInput}, has been submitted.`);
});
```

## Practice Assignment

### Assignment 1: Create a Script that Validates a Form to Ensure All Fields Are Filled Out

Create an HTML file with a form and a script to validate that all fields are filled out.

### Assignment 2: Display an Error Message if the Form Is Incomplete

Enhance the script to display an error message on the page instead of using an alert.

### Assignment 3: Show a Confirmation Message Upon Successful Form Submission

Add a confirmation message upon successful form submission.

By completing these assignments, you will have practiced accessing and manipulating form elements, validating form data, handling form submission, and providing user feedback. These skills are essential for creating interactive and user-friendly web forms.