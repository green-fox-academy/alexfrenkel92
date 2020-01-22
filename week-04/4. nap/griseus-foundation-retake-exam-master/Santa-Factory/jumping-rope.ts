'use strict';

import Toy from './toy';

export default class JumpingRope extends Toy {
    size: number;

    constructor(color: string, size: number) {
        super(color, 15);
        this.size = size;
    }
}