'use strict';
import Animals from './animal'

class AnimalShelter {
    budget: number;
    animals: Animals[];
    // adopters: string[];
    owners: string[];

    constructor() {
        this.budget = 50;
        this.animals = [macska , kutya ];
        this.owners = [];
    }
    rescue(name: Animals): number {
        this.animals.push(name);
        return this.animals.length;
    }
    heal(): number {
        for (let i: number = 0; i < this.animals.length; i++) {
            if (this.animals[i].isHealthy === false && this.animals[i].healCost < this.budget) {
                this.animals[i].isHealthy = true;
                return 1;
            } else {
                return 0;
            }
        }
    }

    addAdopter(name: string): void {
        this.owners.push(name);
    }

    findNewOwner(): void {
        let animalRandom: number = Math.floor(Math.random() * this.animals.length + 1);
        let ownersRandom: number = Math.floor(Math.random() * this.owners.length + 1);
        if (this.animals[animalRandom].isAdoptable()) {
            this.animals[animalRandom].ownerName = this.owners[ownersRandom];
            this.animals.splice(animalRandom, 1);
            this.owners.splice(ownersRandom, 1);
        }
    }

    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;
    }

    toString(): void {
        console.log(`Budget: ${this.budget} \n There are ${this.animals.length} animals and ${this.owners.length} potentional adopters.\n`
            + this.animals.toString())
    }
}


let illatosut: AnimalShelter = new AnimalShelter();

illatosut.addAdopter('Béla');
illatosut.earnDonation(40);

illatosut.toString();

console.log(`Budget: ${this.budget}€, 
There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
<name> is not healthy (healing would cost: <heal cost> €) and not adoptable
<name> is healthy and adoptable`)