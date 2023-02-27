export type Exam = 'A' |'B' |'C' ;

export class Person {
    private _id: number;
    private _fullName: string;
    private _type: Exam;
    constructor(id: number, fullName: string, type: Exam) {
        this._id = id;
        this._fullName = fullName;
        this._type = type;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get type(): Exam {
        return this._type;
    }

    set type(value: Exam) {
        this._type = value;
    }
    getInfo() {
        return `Số báo danh : ${this.id} | Tên đầy đủ là : ${this.fullName} | Khối thi : ${this.type}`;
    }
}