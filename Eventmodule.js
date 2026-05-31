
const EventEmitter = require('events'); // Importing events module

// Create an instance or object of EventEmitter
const eventEmitter = new EventEmitter();

// Listen for the 'greet' event and execute the callback function when the event is emitted
eventEmitter.on('greet', () => {   // .on is used to listen for an event
    console.log("Hello I am harshit");   
})

eventEmitter.emit("greet");  // .emit is used to trigger an event

// Another example with parameters
eventEmitter.on('greeting', (name) => {
    console.log(`Hy my name is ${name}`);
})

eventEmitter.on('userJoined' , (username , age) => {
    console.log(`User ${username} has joined the chat and is ${age} years old.`);
})

eventEmitter.emit("greeting" , "Harshit");
eventEmitter.emit("userJoined" , "Alice" , 25);
eventEmitter.emit("userJoined" , "Alice" , 25); // bina once ka event emit karne ke dusri baar ka event emit karna bhi possible hai

eventEmitter.once('onlyOnce', () => {
    console.log("This event will be triggered only once.");
})

eventEmitter.emit("onlyOnce");
eventEmitter.emit("onlyOnce"); // This will not trigger the event again





