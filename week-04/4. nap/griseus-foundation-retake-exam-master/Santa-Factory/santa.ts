'use strict';

import Toy from './toy';
import SantaFactory from './santa-factory';

export default class Santa {
    bag: Toy[];
    children: string[];
    factory: SantaFactory = new SantaFactory()

    constructor() {
        this.bag = [];
        this.children = [];
    }

    addToBag(name: string, color: string, size?: number): void {
        this.bag.push(this.factory.produce(name, color, size))
    }

    bringToChildren(): void {
        for (let i = this.bag.length; i > 0; i--) {
            let randomChild: number = Math.floor(Math.random() * this.children.length + 1)
            this.bag[i].owner = this.children[randomChild];
            this.bag.splice(i)
            this.children.splice(randomChild)
        }
    }
}