var http = require("http");

var server = http.createServer(handleRequest);

var fs = require("fs");

var url = require("url");

/*
function handleRequest(req, res) {
  console.log(req, res);
}

server.listen(5000);
*/
/*
function handleRequest(req, res) {
  res.end("My first server in NodeJS");
}

server.listen(5100);
*/
/*
function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("My first server in NodeJS");
}

server.listen(5555);
*/
/*
function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome");
}

server.listen(5566);
*/
/*
function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
}

server.listen(7000, () => {
  console.log("Server listening on port 7000");
});
*/
/*
function handleRequest(req, res) {
  res.statusCode = 202;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome");
}

server.listen(3333);
*/
/*
function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000);
*/
/*
function handleRequest(req, res) {
  res.writeHead(205, { "Content-Type": "text/html" });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000);
*/
/*
function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

server.listen(8888);
*/
/*
function handleRequest(req, res) {
  if (req.method === "POST" && req.url === "/index") {
    console.log(req.method);
    res.setHeader("Content-Type", "text/html");
    res.end(`<h2>posted for first time</h2>`);
  }
}

server.listen(5050);
*/
/*
function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end(`Puja Kundu`);
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h2>Puja Kundu</h2>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page not found</h2>");
  }
}

server.listen(2345);
*/
/*
function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "POST" && req.url === "/users") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Posted for the second time");
  }
}

server.listen(2345);
*/

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  console.log(pathname);
  if (req.method === "GET" && pathname === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.end(parsedUrl);
  }
}

server.listen(2345);
