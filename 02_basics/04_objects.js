// singleton object
// const tinderUser = new Object()
// console.log(tinderUser)

//non-singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedin = false

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)    // opening of nested objects

const obj1 = {1 : "a" , 2 : "b"}                              // target 
const obj2 = {3 : "c" , 4 : "d"}
const obj4 = {5 : "c" , 6 : "d"}                              // source
//const obj3 = Object.assign({} , obj1 , obj2 , obj4)                  //important syntax   Object.assign(target,source)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


// objects inside array 
const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "def@gmail.com"
    }
]
console.log(users[1].email)

console.log(Object.keys(tinderUser))         // displays keys of objects in array data structure 
console.log(Object.values(tinderUser))       // displays values of object in array data structure
console.log(Object.entries(tinderUser))      // displays enteries of objects in array data structure

console.log(tinderUser.hasOwnProperty("isloggedin"))


const course = {
    coursename : "Js in hindi",
    price : "999",
    courseinstructor : "Hitesh Choudhary"
}

// console.log(course.coursename)
// console.log(course.courseinstructor)


const {courseinstructor : instructor} = course  
console.log(instructor) 


// {
//     "coursename" : "Js in hindi",
//     "courseinstructor" : "hitesh",
//     "price" : "999"
// }

[
{},
{},
{}
]