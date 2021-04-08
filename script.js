const http = require("http");
const fs = require("fs");

// Create server running on port 8080
http.createServer(function (req, res) {
  if (req.method === "GET") {
    // If the method is get, display HTML page with form
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, {"Content-Type": "text.html"});
      res.write(data);
      return res.end();
    });
  } else if (req.method === "POST") {
    // Post method from form submission
    res.write("Post method");
    return res.end();
    }
}).listen(8080)
