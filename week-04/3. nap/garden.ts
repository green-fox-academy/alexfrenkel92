'use strict';
abstract class Garden {
    typeOfPlant: string;
    constructor(typeOfPlant) {
        this.typeOfPlant = typeOfPlant;
    }
    abstract fill();
}

abstract class Flower {

}

abstract class ColorOfPlant extends Garden {
    colorOfPlant: string;
    constructor(typeOfPlant: string, colorOfPlant: string) {
        super(typeOfPlant);
        this.colorOfPlant = colorOfPlant;
    }
    abstract setColor()

    checkWaterNeed() {
    }
}

abstract class Plant {
    type: string;
    color: string;
    waterlevel: number;

    constructor(type, color, waterlevel) {
        this.type = type;
        this.color = color;
        this.waterlevel = waterlevel;
    }
    abstract irrigateionNeeded();
}