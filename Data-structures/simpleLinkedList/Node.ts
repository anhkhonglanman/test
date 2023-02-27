export class Node1<T> {
    data: T;
    next: Node1<T> | null = null;
    constructor(data: T) {
        this.data= data;
    }
    realData(): T {
        return this.data
    }
}