// Each file within a NODE application have their own scope, you cannot access a variable that is written within another file unless you explicitly export it from it's own file and require it where you want to use it.

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Create
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      // True means you have to provide this information in order for the command to work
      demandOption: true,
      // The required title must be a string
      type: "string",
    },
    body: {
      description: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
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
