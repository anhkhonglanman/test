var user = /** @class */ (function () {
    function user(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    user.prototype.getInfo = function () {
        return " Name : ".concat(this.name, ", email : ").concat(this.email, ", role : ").concat(this.role, " ");
    };
    user.prototype.isAdmin = function () {
        if (this.role === 1) {
            return 'là admin';
        }
        else if (this.role === 2) {
            return 'là người dùng bình thường';
        }
        else {
            console.log('who are you');
        }
    };
    Object.defineProperty(user.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "setRole", {
        set: function (role) {
            this.role = role;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var user1 = new user("Nguyen van A", "A@gmail.com", 1);
console.log(user1.getInfo());
console.log(user1.isAdmin());
user1.setName = 'Tran thi B';
user1.setEmail = 'B@gmail.com';
user1.setRole = 2;
console.log(user1.getInfo());
console.log(user1.isAdmin());
