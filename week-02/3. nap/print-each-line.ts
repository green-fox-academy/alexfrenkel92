'user strict';
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require ('fs');
const path = './myfile.txt';

// let filecontent = fs.readFileSync(path, 'utf-8');
// console.log(filecontent);

try{
    let filecontent = fs.readFileSync(path, 'utf-8');
    console.log(filecontent);
}   catch (e) {
    console.log('Nincs mit olvasni');
}