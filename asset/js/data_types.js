// 1. primitive
// a. Number :
console.log("Tegar" + 3);
console.log("Saleh Hamizic" + 10 * 9);
console.log(NaN * 3);
// b. BigInt :
const bigInt = 9007199254740991n;
console.log(bigInt);
// c. string :
const nama1 = "Arkatama"; // petik ganda
const nama2 = "Arkatama"; // petik tunggal ('')
const nama3 = `Arkatama`; // Backtick
// d. boolean :
let isKaya = true;
let isMiskin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;
// e. null :
let girlfriend = null;
// f. undefined :
let name;
console.log("name");
// g. symbol :
let employee = Symbol("Joko");
console.log(employee);
console.log(employee.description);
// 2. Object
// a. key-value pair :
let employe = {
  namee: "john",
  age: 30,
  job: "web developer",
  isMarried: false,
  hobies: ["sport", "cooking"],
};

console.log(`His name is ${employe.namee} and he is ${employe.age} years old.`);
