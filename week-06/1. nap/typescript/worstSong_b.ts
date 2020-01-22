'use strict';
const fs = require('fs');
const path = './100worst.csv';

function readFile(path: string): string {
	const characterEncoding: string = 'utf-8';
	let fileContent = '';
	try {
        fileContent = fs.readFileSync(path, characterEncoding);
        console.log(fileContent);
	} catch (e) {
		console.log('Hallod teso, hozd letre a filet');
	};
	return fileContent;
}

readFile(path);

function getYears(text: string): string[] {
    let lines = text.split('\n');
    // console.log(lines);
	let years: string[] = [];
	for(let i = 0; i < lines.length; i++) {
		let currentLine = lines[i];
		let splitted = currentLine.split(';');
		years.push(splitted[splitted.length - 1]);
	}
	return years;
}

// const text = readFile(path);
getYears(text)

function countYears(years: string[]): {[k: string]: number} {
	let counted: {[k: string]: number}  = {};
	for(let i = 0; i < years.length; i++) {
		let currentYear: string = years[i];
		if(counted[currentYear]) {	
			counted[currentYear] = counted[currentYear] + 1;
		} else {
			counted[currentYear] = 1;
		}
	}
	return counted;
}

function calculateWorstYear(counted:{[k: string]: number}): string {
	let mostYear = '';
	let mostValue = 0;
	for(let item in counted) {
		// console.log(i); //elerem a keyt;
		// console.log(counted[i]); //elerem a valuet
		if(counted[item] > mostValue) {
			mostValue = counted[item];
			mostYear = item;
		}
	}
	return mostYear;
}

function getResult(path: string): string {
	const text = readFile(path);
	const years = getYears(text);
	const counted = countYears(years);
	const mostYear = calculateWorstYear(counted);
	return mostYear;
}

// console.log(getResult('./100worst.csv'))
