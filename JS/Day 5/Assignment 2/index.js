let input = document.getElementById('text')
let addBtn = document.getElementById('add')
let list = document.getElementById('list')

addBtn.addEventListener('click', function(){
    // Create Remove Button
    let removeBtnElement = document.createElement('button')
    removeBtnElement.innerText = "Remove"

    // Create List 
    let newListElement = document.createElement('li')
    newListElement.innerText = input.value 

    // Add li in List with button inside it
    list.appendChild(newListElement).appendChild(removeBtnElement)

    // Clear Input Tag Value
    input.value = ""
    
    // Add Event Listener
    removeBtnElement.addEventListener('click', function(){
        list.removeChild(newListElement)
    })
})  

