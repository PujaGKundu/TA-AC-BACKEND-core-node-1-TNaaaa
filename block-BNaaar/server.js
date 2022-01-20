var http = require("http");
var url = require("url");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedURl = url.parse(req.url);
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end(JSON.stringify("{message: this is a post request}"));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page not found</h2>");
  }
}

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
