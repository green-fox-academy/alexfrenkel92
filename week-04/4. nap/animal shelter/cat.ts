'use strict';
import Animals from './animal';

export default class Cat extends Animals {

    constructor(isHealthy: boolean, ownerName: string, name: string = 'cat') {
        super(isHealthy, Math.floor(Math.random() * (6 - 0)) + 0, ownerName, name);
    }
}
let cat: Cat = new Cat(false, 'béla')
console.log(cat.isHealthy);
console.log(cat.healCost);
console.log(cat.ownerName);
console.log(cat.name);