'use strict'

class Garden {
   content: Plant[] = [];

  addPlant(plant: Plant) : void {
    this.content.push(plant);
  }

  getStatus() : void {
  for (let i = 0; i < this.content.length; i++) {
    console.log(this.content[i].waterStat())
  }
}

  watering(amount: number) :void {
    let thirstyPlants :Plant[] = [];
    for (let i = 0; i < this.content.length; i++) {
      if ( this.content[i].needsWater() == true ) {
        thirstyPlants.push(this.content[i]);
      }
    }
    for (let i = 0; i < this.content.length; i++) {
      if ( this.content[i].needsWater() == true ) {
        this.content[i].water = this.content[i].water + ( amount * this.content[i].inclusion / thirstyPlants.length)
      }
    }

    this.getStatus();
  }
}


abstract class Plant { 
  color: string;
  water: number;
  need: number;
  inclusion: number;

  constructor(color: string, water = 0, need = 0, inclusion = 1) {
    this.color = color;
    this.water = water;
    this.need = need;
    this.inclusion = inclusion;
  }
  needsWater() :boolean {
      if (this.water<=this.need) {
        return true;
      }
      return false;
    }
  

  abstract waterStat() : string;
}


class Flower extends Plant {

  constructor(color: string, water: number = 0, need: number = 5, inclusion: number = 0.75) {
    super(color, water, need, inclusion);
  }

  waterStat(): string {
    if (this.water<this.need) {
      return `The ${this.color} flower needs water`
    }
  return `The ${this.color} flower doesnt water`
  }
}

class Tree extends Plant {
 
  constructor(color: string, water: number = 0, need: number = 10, inclusion: number = 0.4) {
  super(color, water, need, inclusion);
  }

  waterStat(): string {
    if (this.water<this.need) {
      return `The ${this.color} tree needs water`
    }
    return `The ${this.color} tree doesnt water`
  }  
}

let garden = new Garden();

let flower1: Plant = new Flower('yellow');
garden.addPlant(flower1);
let flower2 : Plant = new Flower('blue');
garden.addPlant(flower2);



let tree1: Plant = new Tree('purple');
garden.addPlant(tree1);
let tree2: Plant = new Tree('orange');
garden.addPlant(tree2);




garden.watering(40);

console.log(garden);

garden.watering(70);

console.log(garden);


// console.log(garden.content[0]);

export{};