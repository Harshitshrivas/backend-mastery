const file = require('fs');

// Create a file
file.writeFileSync("index.txt", "Hey how are youuu")

//read a file
let result = file.readFileSync("index.txt", "utf-8", err => {
    if (err) throw err;
    else {
        console.log("File read successfully");
    }
});
console.log(result);

// Append data to a file
file.appendFileSync("index.txt", "\nI am fine brooo\nWhat about youuu");

// Rename a file
file.renameSync("index.txt", "newIndex.txt");

//copy a file
file.copyFileSync("newIndex.txt" , "CopyOfNewIndex.txt");

// Delete a file
file.unlinkSync("CopyOfNewIndex.txt");

// Check if a file exists
if (file.existsSync("newIndex.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}

// Get file information
let stats = file.statSync("newIndex.txt", (err, stats) => {
  if (err) throw err;
  if (stats.size > 2000000) {
    console.log("File too large");
  }
});

console.log("File size in bytes: " + stats.size);
console.log("Created at: " + stats.birthtime);
console.log("Last modified at: " + stats.mtime);

// Directry
file.mkdirSync("Mydir", {recursive : true});

// remove a directry
file.rmdirSync("Mydir", {})