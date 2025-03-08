const accountId = 144553
let accountEmail = "anushkapurohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
/*
a variavle can be declared without using let,const or var 
this behaviour is not recommended BECAUSE 
it can lead to unintended global variables, 
making debugging difficult.
*/

//accountId = 2 // not allowed

console.table([accountId,accountEmail,accountPassword,accountCity])
accountEmail = "221b489@juetguna.in"
accountCity = "Indore"
let accountState
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
/*
prefer not to use Var
because of isuue in block and functional scope
*/