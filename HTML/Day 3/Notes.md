# Lecture 3: Forms and Input Elements

## Topics Covered:

### Creating Forms

Forms are used to collect user input. They can include various input elements such as text fields, checkboxes, radio buttons, submit buttons, and more.

- **`<form>`**: Defines an HTML form for user input.

#### Example of a Basic Form

```html
<h2>Basic Form Example</h2>
<form action="/submit_form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <input type="submit" value="Submit">
</form>
```

### Input Elements

Input elements allow users to enter data in various forms.

- **Text Field (`<input type="text">`)**: Used for single-line text input.
- **Password Field (`<input type="password">`)**: Used for password input, where characters are hidden.
- **Text Area (`<textarea>`)**: Used for multi-line text input.
- **Button (`<button>`)**: Used to create clickable buttons.
- **Drop-Down List (`<select>` and `<option>`)**: Used to create a drop-down list.

#### Example of Various Input Elements

```html
<h2>Input Elements Example</h2>
<form action="/submit_form" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    
    <label for="comments">Comments:</label><br>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select><br><br>
    
    <button type="submit">Submit</button>
</form>
```

### Form Attributes and Validation

Form attributes and validation ensure that the data submitted by the user meets certain criteria.

- **`action`**: Specifies where to send the form data when the form is submitted.
- **`method`**: Specifies the HTTP method to use when sending form data (e.g., `GET` or `POST`).
- **`required`**: Specifies that an input field must be filled out before submitting the form.

#### Example of Form with Validation

```html
<h2>Form with Validation Example</h2>
<form action="/submit_form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
    
    <button type="submit">Submit</button>
</form>
```

## Practice Assignment

### Assignment 1: Create a Form with Fields for Name, Email, and Message

Create a form in HTML with fields for name, email, and message.


### Assignment 2: Add a Submit Button

Ensure the form includes a submit button.

### Assignment 3: Implement Basic Form Validation (e.g., Required Fields)

Add basic form validation to ensure all fields are required.

By completing these assignments, you will have practiced creating forms with various input elements and implementing basic form validation. This knowledge is crucial for collecting and validating user input on web pages.