const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) throw err;
    response.end(data);
  });
}).listen(3000);