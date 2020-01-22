abstract class Pokemon {
    name: string;
    health: number;
    strength: number;
    doesSpeak: boolean;
    sound: string;

    constructor(name: string, health: number, strength: number, doesSpeak: boolean, sound: string) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.doesSpeak = doesSpeak;
        this.sound = sound;
    }
    abstract speak();
}

function randomStrength(): number {
    let randomStr = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return randomStr;
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 12, randomStrength(), true, 'Pika-Pika')
    }
    speak(): string {
        if (this.doesSpeak == true) {
            return `${this.name} speaks ${this.sound}.`;
        }
        else {
            return `${this.name} does not speak.`;
        }
    }
}

class Bulbasaur extends Pokemon {
    constructor() {
        super('Bulbasaur', 10, randomStrength(), true, 'Bulba-saur')
    }
    speak(): string {
        if (this.doesSpeak == true) {
            return `${this.name} speaks ${this.sound}.`;
        }
        else {
            return `${this.name} does not speak.`;
        }
    }
}

class Charmander extends Pokemon {
    constructor() {
        super('Charmander', 10, randomStrength(), true, 'Char-Char')
    }
    speak(): string {
        if (this.doesSpeak == true) {
            return `${this.name} speaks ${this.sound}.`;
        }
        else {
            return `${this.name} does not speak.`;
        }
    }
}

class Pokebag {
    pokemons: Pokemon[] = [];

    add(pokemons: Pokemon): void {
        this.pokemons.push(pokemons);
    }

    getStrongest(pokemons: Pokemon): void {
    }

    fight(pokemons: Pokemon): void {
    }
}

let pikachu: Pokemon = new Pikachu;
// console.log(pikachu);
console.log(pikachu.speak());

let bulba: Pokemon = new Bulbasaur;
// console.log(bulba);
console.log(bulba.speak());

let charmander: Pokemon = new Charmander;
// console.log(charmander);
console.log(charmander.speak());

let bag1: Pokebag = new Pokebag;
bag1.add(pikachu);
bag1.add(bulba);
bag1.add(charmander);
console.log(bag1);