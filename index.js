const { generatePass } = require("./src");

console.time('prueba')
generatePass(10, 1000, 3);
console.timeEnd('prueba')