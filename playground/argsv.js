// Each file within a NODE application have their own scope, you cannot access a variable that is written within another file unless you explicitly export it from it's own file and require it where you want to use it.

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// const sum = add(1, 2);

// console.log(getNotes());

// console.log(validator.isEmail("Christopher_Dalziel@hotmail.com"));

// console.log(chalk.green.bold.inverse("Success!"));

// console.log(process.argv[2]);
// argsv prints to the console
// 1. Path to nodejs executable
// 2. path to app.js file
// 3. Passed in value

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note");
} else if (command === "remove") {
  console.log("Removing note");
}
