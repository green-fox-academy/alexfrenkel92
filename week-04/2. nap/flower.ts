'use strict'

export class Flower {
    yellowFlower: number;
    blueFlower: number;
    waterLevelYF: number;
    waterLevelBF: number;

    constructor(waterLevel = 0) {
        this.waterLevelYF = waterLevel;
    }

    irrigateYF(waterYF: number) {
        this.waterLevelYF = this.waterLevelYF + waterYF;
    }
    yellowFlowerWaterLevel() {
        if (this.waterLevelYF < 40) {
            return 'The yellow Flower needs water';
        } else {
            return "The yellow Flower doesn't need water";
        }
    }
    // checkYFWL() {
    //     return this.waterLevelYF;
    // }

    irrigateBF(waterBF: number) {
        this.waterLevelBF = this.waterLevelBF + waterBF;
    }
    blueFlowerWaterLevel() {
        if (this.waterLevelBF < 40) {
            return 'The blue Flower needs water';
        } else {
            return "The blue Flower doesn't need water";
        }
    }
    // checkBFWL() {
    //     return this.waterLevelBF;
    // }
}

let flower = new Flower()
flower.irrigateYF(30);
flower.irrigateBF(70);

console.log(flower.yellowFlowerWaterLevel());
console.log(flower.blueFlowerWaterLevel());


// flower.irrigateYF(20);
// console.log(flower.checkYFWL());