"use strict";
exports.__esModule = true;
var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application('App one');
console.log(Application.count);
var app2 = new Application('App two');
console.log(Application.count);
var Instructor = /** @class */ (function () {
    function Instructor(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? '123' : _c, _d = _b.role, role = _d === void 0 ? "assistant" : _d;
        this.role = role;
        this.name = name;
    }
    // Instance method
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    // Base case static method
    Instructor.helloWorld = function () {
        console.log('Hi there');
    };
    // Static method
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'classroom');
    };
    return Instructor;
}());
var juniorInstructor = new Instructor({ 'name': 'Brian' });
var seniorInstructor = new Instructor({ 'name': 'Alice', "role": "classroom" });
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
Instructor.helloWorld(); // "Hi there"
// "Brian can teach: false"
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor.canTeach(juniorInstructor)));
// "Alice can teach: true"
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor.canTeach(seniorInstructor)));
var quanLySp_1 = require("./quanLySp");
var quanLySp_2 = require("./quanLySp");
var laptop = new quanLySp_1.Product("laptop", 20000);
var iphone = new quanLySp_1.Product("Iphone", 10000);
var productManager = new quanLySp_2.ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
