type Node<T> = {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}

export default class ArrayList<T> {
    public length: number;
    private head?: Node<T> | null;
    private tail?: Node<T> | null;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}