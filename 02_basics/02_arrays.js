const marvel_heros = ["ironman" , "thor" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

// concat() and spread [...x,...y] gave the same output.
// spread is more preferred way of writing.

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Anushka"))
console.log(Array.from("Anushka"))
console.log(Array.from({name : "Anushka"}))   //INTERESTING

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))