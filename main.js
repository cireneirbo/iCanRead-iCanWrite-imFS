const fs = require('fs');

//array with duplicates
let numbers = [1, 5, 4, 1, 7, 54353, 32, 12, 12, 12, 12];

//remove duplicates from numbers
let mapNumbers = [...new Set(numbers)];

// fs.appendFile() method
// Get the file contents before the append operation
console.log("\nFile Contents of file before append:",
  fs.readFileSync("text.txt", "utf8"));
  
//add mapNumbers to text.txt
fs.appendFile("text.txt", mapNumbers, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("text.txt", "utf8"));
  }
});