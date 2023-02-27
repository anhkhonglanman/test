class Shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

let shape = new Shape("red", false);


// circle
class Circle {
    color;
    filled;
    radius;
    constructor(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;

    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}

let circle = new Circle(3.5, "indigo", false)

console.log(circle)

// rectangle

class Rectangle {
    width;
    length;
    color;
    filled;
    constructor(width, length, color, filled) {
        this.color = color;
        this.length = length;
        this.width = width;
        this.filled = filled;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}

let rectangle = new Rectangle(2.5, 3.8, "orange", true)

console.log(rectangle)

//