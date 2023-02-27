// abstract
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
var Employee = /** @class */ (function () {
    function Employee(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return Employee;
}());
var FUllTimeEmployee = /** @class */ (function (_super) {
    __extends(FUllTimeEmployee, _super);
    function FUllTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FUllTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FUllTimeEmployee;
}(Employee));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Employee));
var john = new FUllTimeEmployee('John', 'Doe', 12000);
var jane = new Contractor('jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
var OperatingSystem = function (type) {
    console.log('Android ' + type.name + type.language + 'language. ');
};
var Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
