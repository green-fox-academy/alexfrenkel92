'use strict';

/*Santa

- It has `bag` as list of toys.
- It has `children` list with names.
- It has an `addToBag(name, color, size)` method which calls the Santa factory's `produce` method
- It has a `bringToChildren` method which
  - takes a list with name of children e.g.: `Lacika, Sanyika`
  - Santa brings the toys to the children until there is something in the list
  - when a toy is being delivered, it gets it's owner (a random children name)
  - the owner, and the toy should be removed from the lists*/

import Toy from './toy';
import SantaFactory from './santa-factory';

export default class Santa {
    bag: Toy[];
    children: string[];
    factory: SantaFactory=new SantaFactory();
    constructor() {
        this.bag=[];
        this.children=[];
    }
    addToBag(name: string, color: string, size: number) {
        this.bag.push(this.factory.produce(name, color, size));
    }
    bringToChildren(){
        for (let i = this.bag.length; i > 0; i--) {
        let randomChild: number = Math.floor(Math.random() * this.children.length + 1)
        this.bag[i].owner = this.children[randomChild];
        this.bag.splice(i)
        this.children.splice(randomChild)
    }
}
}
