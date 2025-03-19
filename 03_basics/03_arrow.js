const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);      // current context mein jitne variable hai unko use karne k liye this keyword ka use karte hainuser
        console.log(this);
    
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);       // node environment mein empty parenthesis aata hai, browser pr global aata hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     // console.log(this.username);
//     console.log(this);
// }

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//implicit arrow function

const add = (num1,num2) => (num1+num2)
console.log(add(3,4));

console.log(this)     // returns global object

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first();
console.log("End");
