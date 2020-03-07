var fs = require("fs");
fs.readFile("avocado.svg", function(err, data) {
  console.log(JSON.stringify(data));
});
