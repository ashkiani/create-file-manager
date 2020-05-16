#!/usr/bin/env node

const fs = require('fs');
var path = require('path');
const unzipper = require('unzipper');
let args = process.argv.slice(2);
console.log(args);
let appName = args[0];
let dir = path.join(process.cwd(), appName);
console.log("Installing template at:");
console.log(dir);
fs.createReadStream(path.resolve(__dirname,`Archive.zip`))
  .pipe(unzipper.Extract({ path: dir }));
