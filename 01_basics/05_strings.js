const name = "Anushka"
const repoCount = 50 
console.log(name + repoCount + " value")

console.log(`Hi,my name is ${name} and my repo count is ${repoCount}`)

/*

JavaScript provides two ways to create strings: String constructor and String function.

1. String Constructor (new String())
The String constructor is used to create string objects explicitly.

Example:
js
Copy
Edit
let str1 = new String("Hello, World!");
console.log(str1);         // [String: 'Hello, World!']
console.log(typeof str1);  // "object"
Key Points:
Returns a String object (not a primitive string).
Not commonly used because it creates an object, which may cause unexpected behavior in comparisons.
Avoid using new String() unless necessary.
Example of Unexpected Behavior:
js
Copy
Edit
let str2 = new String("Hello");
let str3 = "Hello";

console.log(str2 == str3);  // true (compares values)
console.log(str2 === str3); // false (compares type - one is object, one is string)
Here, str2 is an object, while str3 is a primitive string, leading to a strict inequality (===).

2. String Function (String())
The String function converts values into primitive strings.

Example:
js
Copy
Edit
let str4 = String(100); // Converts number to string
console.log(str4);        // "100"
console.log(typeof str4); // "string"
Key Points:
Always returns a primitive string.
Can be used to convert numbers, booleans, objects, and other values to a string.
Recommended over new String() when working with strings.

*/