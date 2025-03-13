// singleton 
//object.create
//object literals

const mysym = Symbol("key")                //declare a symbol

const jsUser = {
    name : "Anushka",
    full_name : "Anushka Purohit",
    [mysym] : "mykey1",                    //how to write symbol 
    age : 21,
    loctaion : "Indore",
    email : "anushka@google.com",
    isLoggedIn : true,
    lastLoggedIn : ["monday" , "wednesday" , "friday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full_name"])
// console.log(jsUser[mysym])
// console.log(typeof (mysym))

jsUser.email = "anushka@microsoft.com"
//Object.freeze(jsUser)                      //o in uppercase 
console.log(jsUser)
jsUser.email = "anvi@gmail.com"            //no change in email after freezing object 
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)              // 'this' is used to access/refer items from the same object
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo)
console.log(jsUser.greetingTwo())