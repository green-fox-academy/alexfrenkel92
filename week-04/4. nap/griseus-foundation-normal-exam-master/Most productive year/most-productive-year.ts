'use strict';

const fs = require('fs');

function mostProductiveYear(studioName: string): string {
    try {
        let fileContent = fs.readFileSync(`${studioName}.csv`, 'utf-8');
        let split = fileContent.split(',')
        let filterYears = split.filter(function (item) {
            return (parseInt(item) == item);
        });
        return filterYears.reduce(
            (a, b, i, arr) =>
                (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
            null)     
    }
    catch (e) {
        return `Cannot find studio ${studioName}, please try again later.`;
    }
}

console.log(mostProductiveYear('paramount'));
console.log(mostProductiveYear('ghibli'));
console.log(mostProductiveYear('marvel'));
