var url = require("url");
const parsedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`
);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
console.log(parsedUrl.query.toString());
