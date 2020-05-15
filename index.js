const fs = require('fs');
const unzipper = require('unzipper');
let args = process.argv.slice(2);
console.log(args);
let appName = args[0];
fs.createReadStream(`./compressed.zip`)
  .pipe(unzipper.Extract({ path: `./${appName}` }));
