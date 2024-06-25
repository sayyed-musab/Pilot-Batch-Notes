# Lecture 2: Working with Lists and Tables

## Topics Covered:

### Ordered and Unordered Lists

Lists are a fundamental part of HTML, used to group a set of related items. HTML supports two types of lists: ordered and unordered.

- **Ordered List (`<ol>`)**: Used for lists where the order of items is important. Each item in the list is numbered.
- **Unordered List (`<ul>`)**: Used for lists where the order of items does not matter. Each item in the list is marked with a bullet point.
- **List Item (`<li>`)**: Defines an item in a list, whether ordered or unordered.

#### Example of Ordered and Unordered Lists

```html
<h2>Ordered List Example</h2>
<ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ol>

<h2>Unordered List Example</h2>
<ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ul>
```

### Creating Tables

Tables are used to display data in a structured format, using rows and columns.

- **Table (`<table>`)**: Defines a table.
- **Table Row (`<tr>`)**: Defines a row in a table.
- **Table Data (`<td>`)**: Defines a cell in a table row.
- **Table Header (`<th>`)**: Defines a header cell in a table row, usually displayed in bold and centered.

#### Example of a Simple Table

```html
<h2>Simple Table Example</h2>
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
    </tr>
    <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
    </tr>
</table>
```

### Nesting Lists and Tables

Lists and tables can be nested within each other to create more complex structures.

#### Example of Nested Lists

```html
<h2>Nested List Example</h2>
<ul>
    <li>Item 1
        <ul>
            <li>Subitem 1a</li>
            <li>Subitem 1b</li>
        </ul>
    </li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

#### Example of Nested Tables

```html
<h2>Nested Table Example</h2>
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Nested Table
            <table>
                <tr>
                    <td>Sub Data 1</td>
                    <td>Sub Data 2</td>
                </tr>
            </table>
        </td>
        <td>Data 2</td>
    </tr>
</table>
```

## Practice Assignment

### Assignment 1: Create an Ordered List of Your Top 5 Favorite Books or Movies

Create an ordered list in HTML to display your top 5 favorite books or movies.


### Assignment 2: Create an Unordered List of Your Hobbies

Create an unordered list in HTML to display your hobbies.


### Assignment 3: Design a Table to Display Your Weekly Schedule

Create a table in HTML to display your weekly schedule.

By completing these assignments, you will have practiced creating ordered and unordered lists as well as designing a table to display structured data. This knowledge is crucial for organizing content on web pages effectively.