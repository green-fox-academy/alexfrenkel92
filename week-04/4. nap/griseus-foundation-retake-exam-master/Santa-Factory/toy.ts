'use strict';


export default class Toy {
    cost: number;
    color: string;
    owner: string;

    constructor(color: string, cost: number) {
        this.cost = cost;
        this.color = color;
        this.owner = null;
    }
}