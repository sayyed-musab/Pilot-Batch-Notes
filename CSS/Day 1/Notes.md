# Lecture 1: Introduction to CSS

## Topics Covered:

### What is CSS and Its Role in Web Development

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS defines how HTML elements should be displayed. It enhances the look and feel of web pages, allowing for more control over layout, design, and overall aesthetics.

- **Separation of content and design**: HTML is used for content structure, and CSS is used for styling.
- **Reusability**: CSS styles can be reused across multiple HTML pages.
- **Efficiency**: Makes it easier to update and maintain the design of a website.

### Adding CSS to HTML

There are three ways to add CSS to HTML:

1. **Inline CSS**: Uses the `style` attribute within HTML elements.
2. **Internal CSS**: Uses the `<style>` tag within the `<head>` section of an HTML document.
3. **External CSS**: Uses an external stylesheet file linked within the `<head>` section of an HTML document.

#### Example of Adding CSS

1. **Inline CSS**

```html
<p style="color: blue;">This is a blue paragraph.</p>
```

2. **Internal CSS**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
```

3. **External CSS**

```html
<!-- HTML file -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
```

```css
/* styles.css */
p {
    color: blue;
}
```

### Basic CSS Selectors and Properties

- **Selectors**: Used to target HTML elements to apply styles.
    - **Element Selector**: Targets elements by name (e.g., `p`, `h1`).
    - **Class Selector**: Targets elements by class attribute (e.g., `.classname`).
    - **ID Selector**: Targets elements by ID attribute (e.g., `#idname`).

- **Properties**: Used to apply styles to the selected elements.
    - **Color**: Changes the text color (`color` property).
    - **Font**: Changes font styles (e.g., `font-family`, `font-size`).
    - **Background**: Changes background styles (e.g., `background-color`).
    - **Borders**: Adds borders around elements (e.g., `border`).

#### Example of CSS Selectors and Properties

```html
<!-- HTML file -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1 class="header">Heading 1</h1>
    <p id="intro">This is an introductory paragraph.</p>
    <p class="text">This is a text paragraph.</p>
</body>
</html>
```

```css
/* styles.css */
body {
    background-color: lightgray;
}

.header {
    color: blue;
}

#intro {
    font-family: Arial, sans-serif;
    font-size: 16px;
}

.text {
    font-family: 'Times New Roman', serif;
    font-size: 14px;
}
```

## Practice Assignment

### Assignment 1: Create an External CSS File and Link It to Your HTML Document

1. Create an HTML file.
2. Create an external CSS file named `styles.css`.

### Assignment 2: Change the Background Color of Your Page and the Text Color of Your Headings

Modify the `styles.css` file.

### Assignment 3: Style Paragraphs with Different Fonts and Sizes

Further modify the `styles.css` file.
Update the HTML file to include classes for paragraphs:

By completing these assignments, you will have practiced creating and linking an external CSS file, applying basic styles to HTML elements, and using different fonts and sizes to enhance the presentation of text on a web page.