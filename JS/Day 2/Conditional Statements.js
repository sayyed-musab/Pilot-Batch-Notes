// let num = 20
// if(num==20){
//     console.log("20")
// }
// else if(num==10){
//     console.log("10")
// }
// else{
//     console.log("Something Else")
// }

// console.log("ABCD")

let inp = document.getElementById('n');
inp.addEventListener('change', function(){
    if(inp.value < 10){
        console.log("less than 10")
    }
    else if(inp.value > 10){
        console.log("grater than 10")
    }
    else{
        console.log("10")
    }
})



// let inp = document.getElementById('')
// inp.addEventListener('change', function(){

// })


// if(condition){
//     // Exectue
// }