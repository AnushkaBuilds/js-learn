// function myname(){
//     console.log("A")
//     console.log("N")
//     console.log("U")
//     console.log("S")
//     console.log("H")
//     console.log("K")
//     console.log("A")
// }

// myname()

function addtwonums (num1,num2){     
    let result = num1 +num2 
    return result 
}
const result = addtwonums(6,3)
//console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

function calchartprice(val1,val2,...num1){               //rest operator
    return num1
}
console.log(calchartprice(200,400,900,1100))

const user = {
    username : "Anvi",
    price : 1999,
    modeofpayment : "COD"
}

function handleobjects(anyobject){
    return `${anyobject.username} is the username, ${anyobject.price} is the price and ${anyobject.modeofpayment} is the payment mode.`
}

// console.log(handleobjects(user))
console.log(handleobjects( object2 = {
    username : "Veer",
    price : 7899,
    modeofpayment : "Credit/debit"
}))

const mynewarray = [200,400,800,2000]

function arrayvalues(resarray){
    return `${resarray[3]}`
}
console.log(arrayvalues(mynewarray))