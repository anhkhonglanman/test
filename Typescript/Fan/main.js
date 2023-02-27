var fan = /** @class */ (function () {
    function fan() {
        this.speed = fan.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    fan.prototype.getSpeed = function () {
        return this.speed;
    };
    fan.prototype.setSpeed = function (speed) {
        return this.speed = speed;
    };
    fan.prototype.isOn = function () {
        return this.on;
    };
    fan.prototype.setOn = function (on) {
        return this.on = on;
    };
    fan.prototype.getRadius = function () {
        return this.radius;
    };
    fan.prototype.setRadius = function (radius) {
        return this.radius = radius;
    };
    fan.prototype.getColor = function () {
        return this.color;
    };
    fan.prototype.setColor = function (color) {
        return this.color = color;
    };
    fan.prototype.toString = function () {
        if (this.on) {
            return "Fan is on, speed: ".concat(this.getSpeed(), ", color: ").concat(this.getColor(), ", radius: ").concat(this.getRadius());
        }
        else {
            return "Fan is off, color: ".concat(this.color, ", radius: ").concat(this.radius);
        }
    };
    fan.SLOW = 1;
    fan.MEDIUM = 2;
    fan.FAST = 3;
    return fan;
}());
var fan1 = new fan();
fan1.setSpeed(fan.FAST);
fan1.getRadius();
fan1.setColor("yellow");
fan1.isOn();
var fan2 = new fan();
fan2.setSpeed(fan.MEDIUM);
fan2.getRadius();
fan2.setColor("blue");
fan2.isOn();
console.log(fan1.toString());
console.log(fan2.toString());
