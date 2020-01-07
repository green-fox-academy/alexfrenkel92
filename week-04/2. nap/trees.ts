'use strict'

export class Trees {
    purpleTree: number;
    orrangeTree: number;
    waterLevelPT: number;
    waterLevelOT: number;

    constructor(waterLevel = 0) {
        this.waterLevelPT = waterLevel;
    }

    irrigateYF(waterPT: number) {
        this.waterLevelPT = this.waterLevelPT + waterPT;
    }
    purpleTreeWaterLevel() {
        if (this.waterLevelPT < 70) {
            return 'The purple Tree needs water';
        } else {
            return "The purple Tree doesn't need water";
        }
    }

    irrigateBF(waterOT: number) {
        this.waterLevelOT = this.waterLevelOT + waterOT;
    }
    blueFlowerWaterLevel() {
        if (this.waterLevelOT < 70) {
            return 'The orange Tree needs water';
        } else {
            return "The orange Tree doesn't need water";
        }
    }
}

let flower = new Trees()
flower.irrigateYF(40);
flower.irrigateBF(70);

console.log(flower.purpleTreeWaterLevel());
console.log(flower.blueFlowerWaterLevel());


// flower.irrigateYF(20);
// console.log(flower.checkYFWL());