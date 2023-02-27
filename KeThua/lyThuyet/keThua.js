var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Kế thừa
var Vehicle = /** @class */ (function () {
    function Vehicle(name, seat) {
        this.name = name;
        this.seat = seat;
    }
    Object.defineProperty(Vehicle.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "getSeat", {
        get: function () {
            return this.seat;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(name, seat, licensePlate) {
        var _this = _super.call(this, name, seat) || this;
        _this.licensePlate = licensePlate;
        return _this;
    }
    Object.defineProperty(Taxi.prototype, "getLicensePlate", {
        get: function () {
            return this.licensePlate;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}(Vehicle));
var taxi = new Taxi("Vios 2020", 4, "33A-3333");
console.log(taxi.getName);
console.log(taxi.getLicensePlate);
// Kế thừa trong type script
var Car = /** @class */ (function () {
    function Car(color) {
        this.Color = color;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color, price) {
        var _this = _super.call(this, color) || this;
        _this.Price = price;
        return _this;
    }
    Audi.prototype.display = function () {
        console.log("Color of Audi car : " + this.Color);
        console.log("Price of Audi car : " + this.Price);
    };
    return Audi;
}(Car));
var obj = new Audi("Black", 850000);
obj.display();
// Cac loai ke thua trong typescript
// thua ke don
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.Area = area;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.display = function () {
        console.log("Area of the circle: " + this.Area);
    };
    return Circle;
}(Shape));
// let Obj = new Circle(320);
// Obj.display()
// Ke thua nhieu cap
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Braking");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.weep = function () {
        console.log("Weeping");
    };
    return BabyDog;
}(Dog));
var obj = new BabyDog();
obj.eat();
obj.bark();
obj.weep();
