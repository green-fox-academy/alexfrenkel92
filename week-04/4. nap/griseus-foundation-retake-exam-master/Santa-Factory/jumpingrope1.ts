'use strict'

/*JumpingRope

- Jumping rope, costs 15, and can be different color and *size*.*/

import Toy from './toy';

export default class JumpingRope extends Toy {
    size: number;

    constructor(color: string, size: number) {
        super(color, 15);
        this.size = size;
    }
}