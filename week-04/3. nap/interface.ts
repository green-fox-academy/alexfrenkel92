'use strict';

interface Rideable {
    ride(km: number): void;
    fill(fuel: number): void;
    getFuelLevel(): number;
  }
  
interface Washable {
    isStinky(): boolean;
    wash(): void;
  }
  
  class Car implements Rideable, Washable {
    fuelLevel: number;
    dirty: boolean;
  
    constructor() {
      this.fuelLevel = 0;
      this.dirty = false;
    }
  
    ride(km: number) {
      this.fuelLevel -= km / 10;
      this.dirty = true;
    }
  
    fill(fuel: number) {
      this.fuelLevel += fuel;
    }
  
    getFuelLevel(): number {
      return this.fuelLevel;
    }
  
    wash() {
      this.dirty = false;
    }
  
    isStinky() {
      return this.dirty;
    }
  }
  
  class WashingPlace {
    doTheWashing(item: Washable) {
      console.log(item.isStinky());
      if (item.isStinky()) {
        item.wash();
      }
      console.log(item.isStinky());
    }
  }
  
  function goToBalaton(vehicle: Rideable) {
    vehicle.fill(20);
    vehicle.ride(100);
    console.log(vehicle.getFuelLevel());
  }
  
  let car: Rideable & Washable = new Car();
  goToBalaton(car);
  
  let washer = new WashingPlace();
  washer.doTheWashing(car);