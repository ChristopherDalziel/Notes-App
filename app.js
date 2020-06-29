const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was written by NodeJS");

fs.appendFileSync("notes.txt", ", Some extra data has been written by NodeJS");
