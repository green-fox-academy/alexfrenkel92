'use strict';

/*Toy

- It has a cost and color.
- Each toy has an owner, when a toy produced the owner should be null.*/

export default class Toy {
    cost: number;
    color: string;
    owner: string;
    constructor(cost:number, color:string, owner: string = null) {
        this.cost=cost;
        this.color= color;
        this.owner= owner;
    }
}
