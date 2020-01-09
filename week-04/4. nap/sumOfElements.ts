'use strict';

export class Sum {
    intList: number[];
    constructor(intList: number[]) {
        this.intList = intList;
    }
    sumOfElements() {
        let sum = 0;
        for (let i = 0; i < this.intList.length; i++) {
        sum += this.intList[i];
        }
        return sum;
    }
}

// let total = new Sum([555, 1000]);
// console.log(total.sumOfElements());

// console.log(total.intList.length);