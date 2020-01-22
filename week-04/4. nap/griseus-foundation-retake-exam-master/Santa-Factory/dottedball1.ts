'use strict'

import Toy from './toy';

export default class Dottedball extends Toy{
    size: number;
    constructor(color:string, size: number){
        super(color, 10)
        this.size=size;
    }
}