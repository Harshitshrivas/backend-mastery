
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

eventEmitter.emit("greeting" , "Harshit");






