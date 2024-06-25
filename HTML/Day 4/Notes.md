# Lecture 4: Semantic HTML and Best Practices

## Topics Covered:

### Semantic Elements

Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. These elements provide better structure and accessibility to web pages.

- **`<header>`**: Represents introductory content, typically a group of introductory or navigational aids.
- **`<footer>`**: Represents the footer of a section or page, usually containing information about the author, copyright data, or links.
- **`<article>`**: Represents a self-contained composition in a document, page, application, or site, intended to be independently distributable or reusable.
- **`<section>`**: Represents a standalone section of content, typically with a heading.
- **`<aside>`**: Represents content tangentially related to the content around it, such as a sidebar.
- **`<nav>`**: Represents a section of a page that links to other pages or to parts within the page, typically for navigation.

#### Example of Semantic Elements

```html
<!DOCTYPE html>
<html>
<head>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Webpage</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section>
        <h2>Main Content</h2>
        <p>This is a section of the main content.</p>
    </section>
    <aside>
        <h2>Related Links</h2>
        <p>This is an aside section with related links.</p>
    </aside>
    <footer>
        <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
    </footer>
</body>
</html>
```

### Best Practices for Writing Clean and Maintainable HTML

1. **Use Semantic Elements**: Use HTML5 semantic elements to give meaning to your content.
2. **Keep HTML Structure Consistent**: Maintain a consistent structure for easy readability and maintenance.
3. **Use Indentation**: Properly indent your code to reflect nesting.
4. **Comment Your Code**: Use comments to explain sections of your HTML, especially complex parts.
5. **Avoid Inline Styles**: Use CSS for styling instead of inline styles.
6. **Validate Your HTML**: Use HTML validators to ensure your code is free from errors.

## Practice Assignment

### Assignment 1: Redesign the Page from Lecture 1 Using Semantic HTML Elements

Redesign the HTML page from Lecture 1 with semantic HTML elements.

### Assignment 2: Add a Navigation Menu Using the `<nav>` Element

Add a navigation menu to the redesigned page.

### Assignment 3: Create a Footer with Contact Information

Add a footer with contact information to the redesigned page.


By completing these assignments, you will have practiced using semantic HTML elements and applied best practices to create a clean and maintainable HTML document.