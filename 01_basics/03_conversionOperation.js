let score = "33abc"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=>true   0=>false    "" =>false    "Anushka"=>true 


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// NaN => not a number

/*
Parsing in JavaScript refers to the process of analyzing a string and converting it into a meaningful data structure, such as a number, object, or code.
*/

console.log(parseInt("42"))          //42
console.log(parseInt("42abc"))       //42
console.log(parseInt("abc42"))       //NaN

console.log(parseFloat("42.43"))     //42.43
console.log(parseFloat("42.43abc"))  //42.43
console.log(parseFloat("abc42.43"))  //NaN

console.log(Number("3.14"))          //3.14
console.log(Number("3.14"))          //3.14
console.log(Number("42px"))          //NaN


//*****************************************operations****************************************//
