
let os = require('os');
console.log("Operating System Info:");

console.log("OS Type: " + os.type());
console.log("OS Platform: " + os.platform());
console.log("OS Architecture: " + os.arch());
// console.log(os.cpus());
console.log("Home Directory: " + os.homedir());
console.log("Hostname: " + os.hostname());
console.log("User Info: " + JSON.stringify(os.userInfo()));
console.log("Free Memory: " + os.freemem() + " bytes");
console.log("Total Memory: " + os.totalmem() + " bytes");
console.log("Uptime: " + os.uptime() + " seconds");


