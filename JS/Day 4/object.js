let obj1 = {
    "name of school": "ABCD",
    class: 11
}

// console.log(obj1['name of school'])
// console.log(obj1.class)

// console.log(obj1['name of school'], obj1.class)


let obj2 = {
    name: "John",
    age: 10,
    class: 5,
    introduce : function(){
        return `Hi! I am ${this.name}, ${this.age} years old and I am in grade ${this.class}.`
    },
    o: obj1
}

console.log(obj2.introduce())
obj2.name = "XYZ"
console.log(obj2.introduce())

console.log(obj2.o.class)
console.log(obj2['o']['class'])
