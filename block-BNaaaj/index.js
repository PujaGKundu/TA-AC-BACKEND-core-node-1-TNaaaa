console.log("Welcome to Nodejs");

var os = require("os");

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

var { readFile, readFileSync, unlink } = require("fs");

var buff1 = Buffer.alloc(12);

var buff2 = Buffer.allocUnsafe(12);

buff1.write("Node.js Assignment");

console.log(buff1.toString());

readFileSync("./app.js");

readFile("./app.js", (err, content) => {
  console.log(err, content.toString());
});
