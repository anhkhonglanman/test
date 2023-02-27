import {Person} from "../model/Person";
import {IManager} from "./IManager";

export  class PersonManager implements IManager<Person> {
    private people: Person[];
    constructor() {
        this.people= [];
    }
    add(t: Person): void {
        this.people.push(t)
    }
    findAll(): Person[] {
        return this.people;
    }

    findById(id: number): Person | null {
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].id == id) {
                return this.people[i];
            }
        }
        return null;
    }
}