// let a = fetch('https://jsonplaceholder.typicode.com/posts')
// a.then(function(data){
//     console.log("Data", data.json())
// })
// .catch(function(err){
//     console.log(err)
// })

console.log('a')
let tableBody = document.getElementById('tableBody')
async function getData(){
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(await a.json())
}

getData()
console.log('b')
