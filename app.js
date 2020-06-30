// Each file within a NODE application have their own scope, you cannot access a variable that is written within another file unless you explicitly export it from it's own file and require it where you want to use it.

const validator = require("validator");
const add = require("./utils.js");
const getNotes = require("./notes.js");

const sum = add(1, 2);

console.log(getNotes());

console.log(validator.isEmail("Christopher_Dalziel@hotmail.com"));
