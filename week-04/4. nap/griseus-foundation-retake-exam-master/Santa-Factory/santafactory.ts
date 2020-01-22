'use strict'

import Toy from "./toy";

/*Santa Factory

- It has a balance of the factory 200 by default.
- It has a `produce(name, color, size)` method where you can produce a `Toy`
  - It can produce toys until the balance is higher than 0.*/

export default class Santafactory {
    balance: number;
    constructor(balance:number = 200){
        this.balance=balance;
    }
    produce(name: string, color: string, size: number) {
        if(name ==='doll' && this.balance >25) {
            let newDoll: Toy = new Toy(color, 25);
            this.balance -= 25;
        }
    }

}