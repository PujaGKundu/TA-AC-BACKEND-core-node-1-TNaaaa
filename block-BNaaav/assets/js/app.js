var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedURl = url.parse(req.url);
  let pathname = parsedURl.pathname;
  let dir = __dirname.split("assets")[0];
  //Web Pages
  if (req.method === "GET" && pathname === "/") {
    fs.createReadStream(dir + "./index.html").pipe(res);
  } else if (req.method === "GET" && pathname === "/about") {
    fs.createReadStream(dir + "./about.html").pipe(res);
  } else if (req.method === "GET" && pathname === "/destination") {
    fs.createReadStream(dir + "./destination.html").pipe(res);
  } else if (req.method === "GET" && pathname === "/contact") {
    fs.createReadStream(dir + "./contact.html").pipe(res);
  }
  //CSS
  else if (req.method === "GET" && pathname.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    fs.readFile("./assets/stylesheet/" + pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  //JS
  else if (pathname.split(".").pop() === "js") {
    res.setHeader("Content-Type", "text/js");
    fs.readFile("./assets/js/" + pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  //Images
  else if (
    req.method === "GET" &&
    (pathname.split(".").pop().toLowerCase() === "jpg" ||
      pathname.split(".").pop().toLowerCase() === "jpeg" ||
      pathname.split(".").pop().toLowerCase() === "png")
  ) {
    res.setHeader(
      "Content-Type",
      `image/${pathname.split(".").pop().toLowerCase()}`
    );
    fs.readFile("./assets/media/" + pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  //Error
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page not found</h2>");
  }
}

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
