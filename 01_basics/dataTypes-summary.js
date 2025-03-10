// primitive 

// Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue =  100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 35476878469684763758n

//Reference (Non-primitive)

//Array, Objects, Functions

const novel = ["harry potter", "percy jackson", "game of thrones"]     //array

let myObj = {                                                          //object
    name : "Anushka",
    age : 21,
    education : "graduation"
}

const myFunction = function(){                                         //function
    console.log("Hello World!")
}

console.log(typeof outsideTemp);

/*

PRIMITIVE DATATYPES : Primitive types are immutable and compared by value.

Number	Represents integers and floating-point numbers.	let x = 10; let y = 3.14;	"number"
BigInt	Represents large integers beyond Number limits.	let big = 123n;	"bigint"
String	Represents text enclosed in quotes.	let str = "Hello";	"string"
Boolean	Represents true or false.	let flag = true;	"boolean"
Undefined	A variable declared but not assigned a value.	let x;	"undefined"
Null	Represents an intentional empty value.	let val = null;	"object" (JavaScript bug)
Symbol	Represents unique values (mostly for object keys).	let sym = Symbol("id");	"symbol"

NON-PRIMITIVE DATATYPES : Non-primitives are mutable and compared by reference.
Object	Collection of key-value pairs.	let obj = {name: "Alice"};	"object"
Array	Ordered list of values (special type of object).	let arr = [1, 2, 3];	"object"
Function	A callable object that executes code.	function greet() {}	"function" (special case of "object")

*/
