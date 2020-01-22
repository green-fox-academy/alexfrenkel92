'use strict';

abstract class Aircraft { //abstract torlesevel is mukodik
    currentAmmo: number;
    maxAmmo: number;
    baseDamage: number;
    type: string; //getType method-n'l jon be
    isPriority: boolean;

    constructor(maxAmmo: number, baseDamage: number, type: string, isPriority: boolean) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.currentAmmo = 0 //mikor megszuletnek, senkinek sincs semmi loszere
        this.type = type;
        this.isPriority = isPriority;
    }

    fight() {
        let damage = this.currentAmmo * this.baseDamage; //ezzel nem lehet returnolni, mert mindig 0 lenne
        this.currentAmmo = 0;
        return damage //feladat alapjan ezzel ter vissza a fight soran
    }

    refill(refillAmm: number): number {
        let neededAmmo = this.maxAmmo - this.currentAmmo; //csak annyi ammot add hozza, amennyire szukseg van
        if (neededAmmo < refillAmm) {
            refillAmm -= neededAmmo;
            this.currentAmmo += neededAmmo;
        } else {
            this.currentAmmo += refillAmm;
            refillAmm = 0;
        }
        return refillAmm;
    }

    getType(): string {
        return this.type;
    }

    getStatus(): string {
        return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base damage: ${this.baseDamage}, Current ammo: ${this.currentAmmo} `
    }

    abstract getPriority(): boolean;
}

class F16 extends Aircraft {
    constructor() {
        super(8, 30, 'F16', false) //a constructor meghivja a superjet, amibe beirjuk az alap infokat feladatbol. Korabban letrehoztuk a constructor elemeit, itt csak megadjuk az ertekeit
           
    }
    getPriority(): boolean {
        return false;
    }
}

class F35 extends Aircraft {
    constructor() {
        super(12, 50, 'F35', true) //a constructor meghivja a superjet, amibe beirjuk az alap infokat feladatbol. Korabban letrehoztuk a constructor elemeit, itt csak megadjuk az ertekeit
    }
    getPriority(): boolean {
        return true;
    }
}

const wsd: Aircraft = new F16();
wsd.fight();
console.log(wsd.getStatus());
wsd.refill(30);
console.log(wsd.getStatus());
console.log(wsd.getPriority());

const xyz: Aircraft = new F35();
console.log(xyz.getPriority());



class Carrier {
    aircrafts: Aircraft[]; //aircrafteket tartalmaz, f16 es f35 amik aircarft classok
    ammoStore: number;
    hp: number;

    constructor(ammo: number, hp: number) {
        this.aircrafts = this.aircrafts;
        this.ammoStore = this.ammoStore;
        this.hp = hp;
    }

    add(aircraft: Aircraft): void {
        this.aircrafts.push(aircraft); //itt feltolti az aircrafts tombot aircraft-el
    }

    fill(): void { //a priority repcsiket kell megtolteni eloszor. Ezt if-el vizsgaljuk
        for (let i = 0; i < this.aircrafts.length; i++) {
            if (this.aircrafts[i].getPriority()) { //megkerdi aircrafts CustomElementRegistry, hogy priorityk e: true vagy false valaszt kaphat
                this.ammoStore = this.aircrafts[i].refill(this.ammoStore); //itt valamit tolt vagy valami
            }
        }
        for (let i = 0; i < this.aircrafts.length; i++) { //itt mar nem kell a prioritas, mert elozoleg azt megcsinalta. Barhol van, toltse fel az adott elemet/gepet
            this.ammoStore = this.aircrafts[i].refill(this.ammoStore); //itt valamit tolt vagy valami
        }
    }

    fight(enemy: Carrier) { //masik carrierrel akarunk fightolni? feledat szoveget elolvasni
        let allDmg = 0;
        for (let i = 0; i< this.aircrafts.length; i++) {
            allDmg += this.aircrafts[i].fight(); //vegigmegy a rpecsiken es kiuriti az ammojukat?
        }
        enemy.hp -= allDmg;
    }
}

const a1: Aircraft = new F16();
const a2: Aircraft = new F16();
const a3: Aircraft = new F16();
const a4: Aircraft = new F16();

const b1: Aircraft = new F35();
const b2: Aircraft = new F35();
const b3: Aircraft = new F35();
const b4: Aircraft = new F35();

let c1: Carrier = new Carrier(1000, 500);
let c2: Carrier = new Carrier(800, 400);

// c1.add(a1);
// c1.add(a2);
// c1.add(a3);
// c1.add(a4);

c2.add(b1);
c2.add(b2);
// c2.add(b3);
// c2.add(b4);

// c1.fill();
// c2.fill();
// console.log(c1, c2);
// c1.fight(c2);
// c2.fight(c1);
// console.log(c1, c2);

// const asd: Aircraft = new Aircraft(10, 15, 'repcsi');
// const maradek = asd.refill(20);
// console.log(asd);
// console.log(asd.getStatus());
// console.log(maradek);