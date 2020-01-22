'use strict';

export default abstract class Animals {
    name: string;
    isHealthy: boolean;
    healCost: number;
    ownerName: string;


    constructor(isHealthy: boolean, healCost: number, ownerName: string, name: string) {
        this.isHealthy = isHealthy;
        this.healCost = healCost;
        this.ownerName = ownerName;
        this.name = name;
    }

    heal(): void {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        return this.isHealthy;
    }

    toString(): string {
        if (this.isHealthy) {
            return `${this.name} is healthy and adoptable.`;
        } else {
            return `${this.name} is not healthy (healing cost: ${this.healCost} EUR) and not adoptable.`;
        }
    }
};