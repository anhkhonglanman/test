import {IManager} from "./IManager";
import {Person} from "../model/Person";

export class PersonManager implements IManager<Person> {
    private persons: Person[];
    constructor() {
        this.persons= [];
    }
    add(t: Person): void {
        this.persons.push(t);
    }
    edit(id:number, t: Person): void {

    }
    findById(id: number): number {
        return 0
    }
    remove(id: number): void {

    }
    showAll(): Person[] {
        return this.persons;
    }
}