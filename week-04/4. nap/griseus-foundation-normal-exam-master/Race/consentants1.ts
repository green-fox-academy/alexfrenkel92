'use strict'

/*#### Contestant

Create a `Contestant` class, this will represent a contestant attending 
the race. It has 2 private fields (both of them must be set through the constructor)

- `name` - the name of the contestant
- `placement` - an integer, it represents the place the contestant finished at 
the race. It's default value is 0

and two public methods

- `setPlacement(value)` - sets the placement field of the contestant to the given value
- `toString()` -  the method should return a string formatted like the following:
  -  `{name} has finished on place: {placement}`*/

  export default class Constentants {
    name:string;
    placement: number;
    constructor (name: string, placement: number = 0) {
        this.name = name;
        this.placement = placement;
    }
        setPlacement(value:number) {
            this.placement = value;
        }
        toString(): string {
            return `${this.name} has finished on place: ${this.placement}`
        }
    }
  
