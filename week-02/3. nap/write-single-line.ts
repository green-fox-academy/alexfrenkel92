'user strict';
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
const path = './my-file.txt';
let myname: string = '\nGirszonov';

function addSingleLine (addname) {
    try{
        fs.appendFileSync(path, myname);
    }
    catch (e) {
        console.log('Unable to write the file: my-file.txt');
    }
}

addSingleLine(myname);

// const fs = require('fs');
// const filepath = './myfile2.txt';

// function countLines (path) {
//     try {
//     let filecontent = fs.readFileSync(path, 'utf-8');
//     let splitted: string[] = filecontent.split('\n');
//     let nrOfRows = splitted.length;
//     console.log(nrOfRows);
//         }
//     catch (e) {
//     console.log(0);
//     }    
// }

// countLines(filepath);