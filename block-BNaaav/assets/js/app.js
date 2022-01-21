var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedURl = url.parse(req.url);
  let pathname = parsedURl.pathname;
  console.log(req.method, req.url);
  if (req.method === "GET" && pathname === "/") {
    res.sendFile("index.html");
    res.end();
  } else if (req.method === "GET" && pathname === "/about") {
    res.sendFile("about.html");
    res.end();
  } else if (req.method === "GET" && pathname === "/destination") {
    res.sendFile("destination.html");
    res.end();
  } else if (req.method === "GET" && pathname === "/contact") {
    res.sendFile("contact.html");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page not found</h2>");
  }
  if (req.url.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    fs.readFile("./assets/stylesheets/" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
