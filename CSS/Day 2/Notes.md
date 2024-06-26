# Lecture 2: Layout and Positioning

## Topics Covered:

### Box Model

The CSS box model is a fundamental concept that describes the structure of an HTML element. It consists of:

- **Content**: The actual content of the element, such as text or images.
- **Padding**: The space between the content and the border.
- **Border**: The edge surrounding the padding (if any) and content.
- **Margin**: The space outside the border, separating the element from other elements.

#### Example of Box Model

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 300px;
            padding: 20px;
            border: 5px solid black;
            margin: 15px;
            background-color: lightgray;
        }
    </style>
</head>
<body>
    <div class="box">
        This is a box model example.
    </div>
</body>
</html>
```

### CSS Positioning

CSS positioning allows you to control the layout of elements on a webpage. There are five main types of positioning:

1. **Static**: The default position; elements are positioned according to the normal flow of the document.
2. **Relative**: Elements are positioned relative to their normal position.
3. **Absolute**: Elements are positioned relative to their nearest positioned ancestor (not static).
4. **Fixed**: Elements are positioned relative to the viewport and do not move when the page is scrolled.
5. **Sticky**: Elements are positioned based on the user's scroll position.

#### Example of CSS Positioning

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .static {
            position: static;
            background-color: lightblue;
        }
        .relative {
            position: relative;
            left: 20px;
            background-color: lightgreen;
        }
        .absolute {
            position: absolute;
            top: 50px;
            left: 50px;
            background-color: lightcoral;
        }
        .fixed {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: lightgoldenrodyellow;
        }
        .sticky {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            background-color: lightpink;
        }
    </style>
</head>
<body>
    <div class="static">Static Position</div>
    <div class="relative">Relative Position</div>
    <div class="absolute">Absolute Position</div>
    <div class="fixed">Fixed Position</div>
    <div class="sticky">Sticky Position</div>
</body>
</html>
```

### Flexbox for Layout

Flexbox is a CSS layout model that makes it easier to design flexible and responsive layout structures.

- **display: flex**: Defines a flex container and enables a flex context for all its direct children.
- **justify-content**: Aligns flex items along the main axis.
- **align-items**: Aligns flex items along the cross axis.

#### Example of Flexbox

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            background-color: lightgray;
        }
        .item {
            background-color: lightblue;
            padding: 10px;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

## Practice Assignment

### Assignment 1: Use the Box Model to Create a Card-Style Layout for Your Content

Create a card-style layout in HTML.


### Assignment 2: Apply Different Positioning Methods to Elements in Your Page

Create an HTML file to demonstrate different positioning methods.


### Assignment 3: Create a Simple Navigation Bar Using Flexbox

Create an HTML file with a navigation bar using Flexbox.


By completing these assignments, you will have practiced using the box model to create a card-style layout, applying different positioning methods to elements, and creating a responsive navigation bar using Flexbox. These skills are essential for designing and positioning elements effectively on a webpage.