let fs = require("fs");

fs.readFile("./content.md", "utf-8", (err, file) => {
  console.log(err, file);
});

console.time("async code");
fs.readFile("./content.md", "utf-8", (err, content) => {
  console.log(content);
  console.timeEnd("async code");
});

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");
console.log(buff1);

console.log(buff1.toString());
