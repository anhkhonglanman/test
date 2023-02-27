
// Kế thừa
class Vehicle {
    public name: string;
    public seat: string;

    constructor(name, seat) {
        this.name = name;
        this.seat = seat;
    }
    get getName() {
        return this.name;
    }
    get getSeat() {
        return this.seat;
    }
}

class Taxi extends Vehicle {
    public licensePlate: string;

    constructor(name, seat, licensePlate) {
        super(name, seat);
        this.licensePlate = licensePlate
    }
    get getLicensePlate() {
        return this.licensePlate
    }
}

let taxi = new Taxi ("Vios 2020", 4, "33A-3333");
console.log(taxi.getName);
console.log(taxi.getLicensePlate)


// Kế thừa trong type script
class Car {
    Color: string;
    constructor(color: string) {
        this.Color = color
    }
}

class Audi extends Car {
    Price: number;

    constructor(color: string, price: number) {
        super(color);
        this.Price = price;
    }
    display(): void {
        console.log("Color of Audi car : " + this.Color);
        console.log("Price of Audi car : " + this.Price);
    }

}
let obj = new Audi("Black", 850000);
obj.display();


// Cac loai ke thua trong typescript


// thua ke don
class Shape {
    Area: number;
    constructor(area: number) {
        this.Area = area;
    }
}
class Circle extends Shape {
    display(): void {
        console.log("Area of the circle: " + this.Area)
    }
}
// let Obj = new Circle(320);
// Obj.display()

// Ke thua nhieu cap

class Animal {
    eat():void {
        console.log("Eating")
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Braking")
    }
}
class BabyDog extends Dog {
    weep(): void {
        console.log("Weeping")
    }
}

// let obj = new BabyDog();
// obj.eat();
// obj.bark();
// obj.weep();


// Sử dụng từ khóa "super"

// class Rectangle {
//
//     constructor(height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a '+ this.name +'.');
//     }
//     get area() {
//         return this.height * this.width;
//     }
//     set area(value) {
//         this.area = value
//     }
// }
//
// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length)
//         this.name = 'Square';
//     }
// }