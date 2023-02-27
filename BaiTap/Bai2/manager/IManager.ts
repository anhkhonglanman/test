export interface IManager<T> {
    add(t: T): void;
    findAll(): T[];
    findById(id: number): T | null;
}