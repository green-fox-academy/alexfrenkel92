class Circle {
    static pi: number = 3.14;
    static count: number = 0;
    radius: number;

    constructor(radius: number = 0) {
        this.radius = radius;
        Circle.count++; //mindig 1el noveli meg, valami stat valtozo
    }
    static calculateArea(radius: number){
        return this.pi = radius * radius;
    }
}

let mCircle = new Circle();
console.log(Circle.count);

let myCircle2 = new Circle (5);
console.log(Circle.count);

let area = Circle.calculateArea(20);
console.log(area);