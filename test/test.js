let Tools = require("../dist/index.js");

let counts = Object.keys(Tools).length;

console.log(Tools);
console.log("\033[;33m total:" + counts + "\033[0m");
