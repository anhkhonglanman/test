
class Person {
    name: string;
    eat(): void {
        console.log(this.name + "eats when hungry.")
    }
}
class Student extends Person {
    //variable
    rollnumber: number;
    // constructor
    constructor(rollnumber: number, name1: string) {
        super();
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    displayInfomation():void {
        console.log("Name : " + this.name +", Roll Number : " + this.rollnumber)
    }
    // overriding super class method
    eat():void {
        console.log(this.name + "eats during break.")
    }
}

let student1 = new Student(2, "Rohit")

student1.displayInfomation()
student1.eat()