// function func1(name, age=0){
//     console.log("Hi!", name)
//     console.log(age)
// }

// func1("Saud", 20)


// function func2(password){
//     password = "$@#$*" + password + "209480"
//     return password
// }

// let newPassword = func2("abcd")
// console.log(newPassword)


// function rec(n){
//     if(n==0){
//         return 0
//     }
//     return( n + rec(n-1))
// }


// let a = rec(5)
// console.log(a)

function isPalindrome(str){
    str = str.toLowerCase()
    let newStr = str.split(" ").join("")
    let reverseStr = newStr.split("").reverse().join("")
    if(newStr == reverseStr){
        console.log("isPalindrome")
    }
    else{
        console.log("not palindrome")
    }
}
isPalindrome("A Santa lived as  a devil at NASA")
isPalindrome("abcd")