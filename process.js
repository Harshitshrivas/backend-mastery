
console.log('This is the process module example.');
console.log(`current working directory: ${process.cwd()}`);
console.log(`Node.js version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Process ID: ${process.pid}`);
//console.log(`Environment Variables: ${JSON.stringify(process.env)}`);
console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
console.log(`Uptime: ${process.uptime()} seconds`);
console.log(`${process.exitCode}`); // Output: 0 (default exit code)


