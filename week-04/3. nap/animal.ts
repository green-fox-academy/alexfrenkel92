'use strict';

abstract class Animal {
    name: string;
    isHealthy: boolean;
    healCost: number;
    adoptable: boolean;
    animals: Animal[];

    constructor(name: string, isHealthy: boolean, healCost: number, adoptable: boolean) {
        this.name = name;
        this.isHealthy = isHealthy;
        this.healCost = healCost;
        this.adoptable = adoptable;
        this.animals = [];
    }

    // ownerNameIs(): string {
    //     return this.name;
    // }

    heal(): boolean {
        return this.isHealthy = true;
    }

    isAdoptable(): boolean {
        if (this.isHealthy == true) {
            return this.adoptable = true;
        } 
        else {
            return this.adoptable = false;
        }
    }

    toString(): string {
        if (this.isHealthy == false) {
            return `${this.name} is not healthy and not adoptable. Healing costs ${this.healCost}.`
        } else {
            return `${this.name} is healthy and adoptable.`
        }
    }

    healAll() {
        for (let animalsAll of this.animals) {
            animalsAll.heal();
        }
    }
}

function randomHealCost(min, max): number {
    let randomHC = Math.floor(Math.random() * (max - min + 1) + min);
    return randomHC;
}

class Cat extends Animal {
    constructor (name: string) {
        super(name, false, randomHealCost(0, 6), false);
    }
}

class Dog extends Animal {
    constructor (name: string) {
        super(name, false, randomHealCost(0, 6), false);
    }
}

let kitty: Animal = new Cat('Kitty');
console.log(kitty);
// kitty.heal();
// kitty.isAdoptable();
console.log(kitty.toString());

let dirty: Animal = new Dog('Dirty')
console.log(dirty)
dirty.heal();
dirty.isAdoptable();
console.log(dirty);
console.log(dirty.toString());
