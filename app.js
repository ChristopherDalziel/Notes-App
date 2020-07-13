// Each file within a NODE application have their own scope, you cannot access a variable that is written within another file unless you explicitly export it from it's own file and require it where you want to use it.

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");
const { describe } = require("yargs");

// Create
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

// Remove
yargs.command({
  command: "remove",
  describe: "Remove existing note",
  handler: function () {
    console.log("Removing existing note");
  },
});

// Read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

// List
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler: function () {
    console.log("A list of all notes");
  },
});

// add, remove, read, list

console.log(yargs.argv);
