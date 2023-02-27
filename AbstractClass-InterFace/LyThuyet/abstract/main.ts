// abstract

abstract class Employee {
    constructor(private firstName: string,private LastName: string) {
        
    }
    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string{
        return `${this.fullName} makes ${this.getSalary()} a month.`
    }
}

class FUllTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName)
    }

    getSalary(): number {
        return this.salary
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number){
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.hours
    }
}

let john = new FUllTimeEmployee('John','Doe',12000);
let jane = new Contractor('jane','Doe',100,160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());


// Interface

interface OS {
    name: string;
    language: string;
}

let OperatingSystem = (type: OS): void => {
    console.log('Android ' +type.name+ ' has ' + type.language + 'language. ');
    
};

let Oreo = {name: 'O', language: 'Java'};
OperatingSystem(Oreo);