//meital israel and liran edelshtein
const http = require("http"); // Import Node.js core module
const fs = require("fs"); // import file module
const path = require("path");
const dirPath = path.join(__dirname, "/templates");

// read html file
const file2Send = fs.readFileSync(`${dirPath}/page.html`);
const server = http.createServer(function (req, res) {
  console.log(req);
  res.setHeader("Content-Type", "text/html");
  res.end(file2Send);
});

server.listen(3000); 
console.log("Node.js web server at port 3000 is running..");
