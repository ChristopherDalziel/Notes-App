const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// Creating a json file

// Turn the object into a string data
// const bookJSON = JSON.stringify(book);

// Writes the JSON data to a file we can load in and reuse at a later time
// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);

// // Turn the string JSON data into an object
// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData.title);

// Reading json file

// What comes back is a buffer not a string, this is why we're calling it a "buffer"
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);
