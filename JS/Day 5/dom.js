// Create and Add New Element 
let a = document.createElement('p')
a.innerText = "idwjefwe"
document.body.append(a)

// Read
let lists = document.getElementsByTagName('ul')
// console.log(lists)

let byClass = document.getElementsByClassName('red')
// console.log(byClass)

let byQuery = document.querySelectorAll('.red')
// console.log(byQuery)

let byId = document.getElementById('nav')
console.log(byId.children)
console.log(byId.childElementCount)
console.log(byId.childNodes)
console.log(byId.attributes)

// Update
// byId.innerHTML = "<h1>List</h1>"
// byId.innerText = "List"
// byId.style.backgroundColor = "red"


// Delete
// byId.remove()

