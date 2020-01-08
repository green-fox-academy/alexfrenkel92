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
    let thirstyPlants: Plant[] = [];
    for (let i = 0; i < this.content.length; i++) {
      if ( this.content[i].noThanks() == false ) {
        thirstyPlants.push(this.content[i]);
      }
    }
    for (let i = 0; i < this.content.length; i++) {
      if ( this.content[i].noThanks() == false ) {
        this.content[i].water = this.content[i].water + ( amount * this.content[i].inclusion / thirstyPlants.length)
      }
    }
    this.getStatus();
  }
}


class Plant { 
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
  noThanks() :boolean {
    if (this.water>=this.need) {
      return true;
    }
    return false;
  }

  waterStat() : string {
  return '';
  }
}


class Flower extends Plant {

  constructor(color: string, water: number = 0, need: number = 5, inclusion: number = 0.75) {
    super(color, water, need, inclusion);
  }
  // ez nem is kell, mert ha nem letezik flower szinten akkor a plant szinten letezot terjeszti ki flowerre
  // noThanks() :boolean {
  //   return super.noThanks();
  // }

  waterStat(): string {
    // console.log('flower'); 
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
  // ez szinten nem is kell, mert ha nem letezik tree szinten akkor a plant szinten letezot terjeszti ki treere
  // noThanks() :boolean {
  //   return super.noThanks();
  // }


  waterStat(): string {
    // console.log('tree'); 
    if (this.water<this.need) {
      return `The ${this.color} tree needs water`
    }
    return `The ${this.color} tree doesnt water`
  }  
  // treeMethod() {
  //   console.log("whatever");
  // }
}

let garden = new Garden();

let flower1: Plant = new Flower('yellow');
garden.addPlant(flower1);
let flower2 : Plant = new Flower('blue');
garden.addPlant(flower2);



let tree1: Plant = new Tree('purple');
garden.addPlant(tree1);
let tree2: Plant = new Tree('orange');
// (tree2 as Tree).treeMethod
garden.addPlant(tree2);




garden.watering(40);

console.log(garden);

garden.watering(70);

console.log(garden);


// console.log(garden.content[0]);

export{};