'use strict';

const fs = require('fs');
const path1 = './100worst.csv';

let contentRead = fs.readFileSync(path1, 'utf-8');
// let lines = contentRead.toLowerCase().split('\r\n');

// console.log(lines);

function getYear (text: string): string[] { //text helyere jon a contentRead
    let lines = text.toLowerCase().split('\r\n');
    let years: string[] = []
    for (let i: number = 0; i < lines.length; i++) {
        let currentline = lines[i];
        let splittedByLines = currentline.split(';');
        years.push(splittedByLines[splittedByLines.length - 1]);
    }
    return years;
}


function countYear(years: string[]): {[k: string]: number} {
    let counted: {[k: string]: number} = {};
    for (let i: number = 0; i < years.length; i++) {
        let currentYear: string = years[i];
        if(counted[currentYear]) {
            counted[currentYear] = counted[currentYear] + 1; //ha talal egyet, noveli eggyel
        } else {
            counted[currentYear] = 1 //ez nem tiszta, haha
        }
    }
    return counted;
}

function worstYear(counted: {[k: string]: number}): string {
    let mostYear = '';
    let mostValue = 0;
    for (let item in counted) {
        if(counted[item] > mostValue) {
            mostValue = counted[item];
            mostYear = item;
        }
    }
    return mostYear;
}


function getResulttt(): string {
let years = getYear(contentRead);
let countY = countYear(years);
let worstY = worstYear(countY);
return worstY;
}

console.log(getResulttt());

// console.log(getYear(contentRead));
// console.log(countYear(years));