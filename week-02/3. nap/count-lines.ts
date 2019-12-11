'user strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


const fs = require('fs');
const filepath = './myfile2.txt';

function countLines (path) {
    try {
    let filecontent = fs.readFileSync(path, 'utf-8');
    let splitted: string[] = filecontent.split('\n');
    let nrOfRows = splitted.length;
    console.log(nrOfRows);
        }
    catch (e) {
    console.log(0);
    }    
}

countLines(filepath);


// try {
//     const fs = require('fs');
//     const filepath = './myfile2.txt';

//     function countLines (path) {
//     let filecontent = fs.readFileSync(path, 'utf-8');
//     let splitted: string[] = filecontent.split('\n');
//     let nrOfRows = splitted.length;
//     console.log(nrOfRows);
// }
//     countLines(filepath);
// }
// catch (e) {
//     console.log(0);
// }