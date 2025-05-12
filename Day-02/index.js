console.log("Day-02");

// variables : Varibales are used to store data in js

// - 'var' - Function-scoped, can be redeclared (not recomended)
// - 'let' - Block-scoped, can be reassigned
// - 'const' - Block-scoped, **cannot** be reassigned

var address = "Bangalore";

console.log(address);

var address = "india";

console.log(address);

// let can be reassigned but it cant redeclared .

let myName = "Ankit";

console.log(myName);

myName = "rj";

console.log(myName);

// multiple varibale declaration

let name, salary, department;

salary = null;

// this is comments in js - your js program will not treat it as a program

// // Primitive Data Types:

// - String - Text values ("Hello")
// - Number - Numeric values (`25`,`3.14`)
// - Boolean - True / False
// - undefined  - a varibale is declared but not assigned
// - Null - Represents nothing ( let y = null; )
// - BigInt - Large numbers
// - Symbol - Unique identifiers

// // Non primitive

// - Object - Collection of key-value
// - Array - Orderd list of values
// - Function - Code that can be executed

// example of complex data type - using complex data type

let score = 10;
// Or 
let student = {
  name: "Alice",
  age: 22,
  isEnrolled: true,
};

console.log(student.name); // Output: Alice

let arr = [1,2,4,5];


// Heap vs Stack 

// How Js See The Code .

// Tokenizing 
// Parsing - Abstract Syntax Tree . - website - ast explorer.net 
// Interpreting


// 49:05 - Do Assignment.

