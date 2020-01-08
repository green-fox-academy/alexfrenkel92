'use strict';

abstract class Animal {
    name: string;
    breed: string;
    age: number;
    constructor(name) {
        this.name = name;
        
    }
    getName() {
        return this.name;
    }
    abstract getBreed();
}

class Reptile extends Animal {
    constructor(name: string) {
        super(name);
    }
    getBreed(): string {
        return 'laying eggs';
    }
}

class Mammal extends Animal {
    constructor(name?: string) {
        super(name);
    }
    getBreed(): string {
        return 'pushing miniature versions out.';
    }
}

class Bird extends Animal {
    constructor(name?: string) {
        super(name);
    }
    getBreed(): string {
        return 'laying eggs';
    }
}

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.getBreed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.getBreed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.getBreed()}`);