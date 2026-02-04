
let path = require('path');

// Get the base name of a file
console.log("Base Name: " + path.basename('/backend-mastery/path.js'));

// Get the directory name of a file
console.log("Directory Name: " + path.dirname('/backend-mastery/path.js'));

console.log(__dirname);
console.log(__filename);

let extenstion = path.extname(__filename); // Get my current file extension
console.log(extenstion);

// parse a path
let parsedPath = path.parse(__filename);  
console.log("Parsed Path: ", parsedPath);

// Get the file extension
console.log("File Extension: " + path.extname('path.jsx'));

// Join multiple path segments
let fullPath = path.join('/backend-mastery', 'path.js');
console.log("Joined Path: " + fullPath);

// Resolve a sequence of paths into an absolute path
let absolutePath = path.resolve('backend-mastery', 'path.js');
console.log("Resolved Absolute Path: " + absolutePath);

// Normalize a path
let normalizedPath = path.normalize('/backend-mastery//path.js');
console.log("Normalized Path: " + normalizedPath);

// separate a path into its components
let pathComponents = __filename.split(path.sep);
console.log("Path Components: ", pathComponents);

console.log("Seprator : " + path.sep);
 
// Check if a path is absolute
let isAbsolute = path.isAbsolute(__filename);   // mtlb root se start ho rha h ya nhi
console.log("Is Absolute Path: " + isAbsolute);

// Get the relative path from one location to another
let relativePath = path.relative('/backend-mastery', __filename);
console.log("Relative Path: " + relativePath);

// Format a path object into a path string
let formattedPath = path.format(parsedPath);
console.log("Formatted Path: " + formattedPath);