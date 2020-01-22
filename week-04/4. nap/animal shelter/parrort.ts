'use strict';
import Animals from './animal';

class Parrot extends Animals {
    
    constructor(name: string, isHealthy: boolean, ownerName?: string) {
        super( isHealthy, Math.floor(Math.random() * (10 - 4)) + 4, ownerName, name)
    }
}
let parrot: Parrot = new Parrot('Gyuri', true, 'Feribá');
console.log(parrot.toString());