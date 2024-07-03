console.log('a')

function getData() {
    return new Promise(function(resolve, reject){
        // Simulating an asynchronous operation (e.g., fetching data)
        setTimeout(function(){
            let data = {
                name: "John Doe",
                age: 30,
                city: "New York"
            };
            resolve(data);
            // Resolve the promise with the data
        }, 2000); // Simulating 2 seconds delay
    });
}

getData()
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})

console.log('b')

