class Application {
    private name: string;
    static count: number = 0;
    constructor(name: string) {
        this.name = name;
        Application.count++
    }
}
console.log(Application.count);
let app1 = new Application('App one');
console.log(Application.count);
let app2 = new Application('App two');
console.log(Application.count);


class Instructor {
    role;
    name;
    constructor({ name ='123', role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    // Base case static method
    static helloWorld() {
        console.log('Hi there');
    }

    // Static method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }

}

let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld(); // "Hi there"

// "Brian can teach: false"
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);

// "Alice can teach: true"
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);


import {Product} from "./quanLySp";
import {ProductManager} from "./quanLySp";

let laptop = new Product("laptop", 20000);
let iphone = new Product("Iphone", 10000);

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;

console.log(productManager.getAll);