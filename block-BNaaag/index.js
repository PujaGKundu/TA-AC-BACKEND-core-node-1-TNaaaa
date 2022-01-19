let { readFile, readFileSync } = require("fs");

//Async
readFile("./content.md", "utf-8", (err, content) => {
  console.log(content);
});

//Sync
var result = readFileSync("./content.md", "utf-8");
console.log(result);

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");
console.log(buff1);

console.log(buff1.toString());
