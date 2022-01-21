var http = require("http");

http
  .createServer((request, response) => {
    console.log(request, response);
    response.end("Welcome");
  })
  .listen(4000, "localhost");
