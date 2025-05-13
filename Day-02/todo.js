
let name = "Ankit";
let age = 20;
let isStudent = "";
let favoriteProgramminglanguage = "javaScript"

console.log(name)
console.log(age)
console.log(isStudent)
console.log(favoriteProgramminglanguage)

var myfullName = "Ankit";
let score = 100;
const iseligible = true;

myfullName = "Ankit Raj";
score = 200;
// iseligible = false; - Assignment to constant variable.

let obj = {
    name:"unknown",
    age:19,
    iseligible:false,
}

let varObj = obj

console.log(varObj.iseligible)

let finalScore = [22,44,33,50];

let copyScore = finalScore;


copyScore[1] = 99

console.log(finalScore)
console.log(copyScore)