'use strict';

import Toy from './toy';

export default class Doll extends Toy {

    constructor(color: string) {
        super(color, 25);
    }
}
