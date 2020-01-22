'use strict';

const fs = require('fs');

let fileContent = fs.readFileSync('responses.txt', 'utf-8');
let split: string[] = fileContent.split('\r\n');
let moreSplit: string[] = split.toString().split('\,');
let abitmoreSplit: string[] = moreSplit.toString().split(' ')
let keys: string[] = ['matReview', 'preSkills', 'helpfulness', 'explanations']
let list: string[][] = [];


function jozsi() {
    for (let i: number = 0; i < split.length; i++) {
        let splitted = split[i].split(' ');
        list.push(splitted);
    }
    return list;
}

function counter(list) {
    let rowAwerage: number
    for (let i: number = 0; i < list.length; i++) {
        for (let j: number = 0; j < list.length; j++) {
            rowAwerage = list[i][j]
        }
    } return list
}
console.log(counter(list))