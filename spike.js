const fs = require("fs");

fs.readFile("./dummy.png", (err, buffer) => {
  // console.log(err, buffer)
  console.log(buffer.toString("base64"));
});
