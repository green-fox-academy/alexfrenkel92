const fs = require('fs');
const path = './myfile2.txt';
let filecontent = fs.readFileSync(path, 'utf-8');
let splitted: string[] = filecontent.split('\n');
let nrOfRows = splitted.length;

console.log(nrOfRows);