let myarr = [0,1,2,3,4,5]
/*
let myHeros = ["shaktiman","naagraj"]

let arr2 = new Array(1,2,3,4)
console.log(myarr[3])

//Array methods

myarr.push(6) //adds an element at the end of the array
myarr.push(7)
myarr.push(8)
console.log(myarr)

myarr.pop()   //removes the last element from the array
console.log(myarr)

myarr.unshift(9)  //inserts an element at the beginning of the array
console.log(myarr)

myarr.shift()     //removes the element from the start of the array
console.log(myarr)

const newarr = myarr.join()
console.log(myarr)
console.log(newarr)
*/

// SLICE, SPLICE

console.log("A ",myarr)
const myn1 = myarr.slice(2,4)
console.log(myn1)

console.log("B ",myarr)
const myn2 = myarr.splice(1,4)
console.log(myarr)
console.log(myn2)