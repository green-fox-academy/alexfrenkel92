'use strict'

/* Doll

- Doll, it costs 25, and can be different color.*/
import Toy from './toy1';
export default class Doll extends Toy {

    constructor(color: string) {
        super(color, 25);
    }
}
