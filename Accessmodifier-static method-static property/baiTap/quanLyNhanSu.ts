class Employee {
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;
    private _address: string;
    private _jobPosition: string;

    constructor(firstName: string, lastName: string, dateOfBirth: Date, address: string, jobPosition: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    get firstName(): string {
        return this._firstName
    }
    set firstName(value: string) {
        this._firstName = value
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastname(value: string) {
        this._lastName = value;
    }
    get dateOgBirth(): Date {
        return this._dateOfBirth;
    }
    set dateOfBirth(value: Date) {
        this._dateOfBirth = value
    }
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value
    }
    get jobPosition(): string {
        return this._jobPosition;
    }
    set jobPosition(value: string) {
        this._address = value
    }
}

class EmployeeManager {
    private static employees: Employee[] = [];

    static addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    static removeEmployee(index: number): void {
        this.employees.splice(index, 1);
    }
    static updateEmployee(index: number, employee: Employee): void {
        this.employees[index] = employee;
    }
    static getEmployee(index: number): Employee {
        return this.employees[index];
    }
    static getAllEmployees(): Employee[] {
        return this.employees;
    }
}
// thêm nhân sự
EmployeeManager.addEmployee(new Employee("Nguyen", "Ty", "01/01/1990", "123 Ninh So, VN", "Senior Software Engineer"));

// hiên thị danh sách nhân sự
console.log(EmployeeManager.getAllEmployees());

// cập nhật thông tin nhân sự
EmployeeManager.updateEmployee(0, new Employee("Tran", "Ty", "01/01/1990", "123 Ninh So, VN", "Senior Software Engineer"));

// hiển thị danh sách nhân sự
console.log(EmployeeManager.getAllEmployees());

// Xóa nhân sự
EmployeeManager.removeEmployee(0);

// hiển thị danh sách nhân sự
console.log(EmployeeManager.getAllEmployees());