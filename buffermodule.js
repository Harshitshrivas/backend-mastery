
const buffer = Buffer.from('Hello, World!');
console.log(buffer); // Output: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
console.log(buffer.toString()); // Output: Hello, World!

const buffer2 = Buffer.alloc(10);
console.log(buffer2); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

const buffer3 = Buffer.allocUnsafe(10);
console.log(buffer3); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00> (may contain old data)

const buffer4 = Buffer.from([65 , 66, 67 , 68]);
console.log(buffer4); // Output: <Buffer 41 42 43 44>
console.log(buffer4.toString()); // Output: ABCD