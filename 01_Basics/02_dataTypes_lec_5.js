"use strict"; //? This is typed to treat all JS code in the file according to newer version

alert (3+3) //! gives error, since we are using node.js currently and not browser- run this in browser console

/*

//* Types of data-types

//* I- Primitive Data Type - The built-in data types provided by JavaScript. They represent single values and are not mutable

1. number (2^53)
2. bigint - numbers greater than 2^53-1 
3. string
4. boolean (true or false)
5. null (standalone type)
6. undefined 
7. symbol (unique)

// undefined vs null:
1. undefined == null // true (loose equality considers them equal).
2. undefined === null // false (they are not strictly equal in type).
3. undefined values are omitted during serialization while null values are preserved during JSON serialization (e.g., {“key”: null} ).
4. undefined - Indicates a variable that has been declared but not yet assigned a value while null - Represents the intentional absence of any object value and it Must be explicitly assigned to a variable.
let x;
console.log(x) // undefined.
console.log(typeof x) // undefined
let y = null;
console.log(y) // null
console.log(typeof y) // gives object as output; a drawback in the JS language

//* II- Non-Primitive Data types - They can store collections of values or more complex entities

1. object
2. Arrays

*/



//* To get the type of any data- use type of

let x = 5
console.log(typeof x)
console.log(typeof "Pranaw")

//or

console.log(typeof (x))

console.log(typeof null) //Note: gives object as output; a drawback in the JS language
console.log(typeof undefined) //Note: gives undefined as output; undefined is a type of itself

console.log(typeof NaN); // number
// NaN stands for "Not-a-Number", but ironically, its type is number. NaN is a special numeric value that represents an invalid number operation.
console.log(typeof 5); // number
let x = 0/0;
console.log(x) // NaN
