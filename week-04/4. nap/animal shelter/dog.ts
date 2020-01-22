'use strict';
import Animals from './animal';

class Dog extends Animals {
    
    constructor(name: string, isHealthy: boolean, ownerName?: string) {
        super(isHealthy, Math.floor(Math.random() * (8 - 1)) + 1, ownerName, name)
    }
}
let dog: Dog = new Dog('Bodri', false, 'Judit');
console.log(dog.toString());