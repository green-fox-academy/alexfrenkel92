'use strict';

interface Flyable {
    fly(km: number): void;
    fill(kerozin: number): void;
    fuelLevel(): number;
}

interface WashTheBaby {
    isDirty(): boolean;
    wash(): void;
}

class Vehicle implements Flyable, WashTheBaby {
    fuel: number;
    dirty: boolean;
    constructor() {
        this.fuel = 100;
        this.dirty = false;
    }
    fly(km: number) {
        this.fuel -= km / 10; 
        this.dirty = true;
    }
    fill(kerozin: number) {
        this.fuel += kerozin;
    }
    fuelLevel() {
        return this.fuel;
    }
    isDirty() {
        return this.dirty;
    }
    wash() {
        this.dirty = false;
    }
}

function flyToEdgeOfTheWorld (balloon: Vehicle) {
    balloon.fill(150);
    balloon.fly(330);
    console.log('Fuel level is: ' + balloon.fuelLevel());
    console.log('Is my favourite ballon dirty? ' + balloon.isDirty());
}

class Washing {
    washTheBalloon(balloon1: WashTheBaby) {
        console.log('Is it really dirty? ' + balloon1.isDirty());
        if (balloon1.isDirty()) {
            balloon1.wash();
        }
        console.log('Is my favourite balloon still dirty? ' + balloon1.isDirty());
    }
}

let travell = new Vehicle();
flyToEdgeOfTheWorld(travell);

let washing = new Washing();
washing.washTheBalloon(travell);

