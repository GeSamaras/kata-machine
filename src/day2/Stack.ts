//using prev to better visualize the stack
type QNode<T> = {
    value: T;
    prev?: QNode<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: QNode<T>;
    

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as QNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        //if there's a head, set the new node's prev to the head
        //then set the head to the new node
        node.prev = this.head;
        this.head = node;

}
    pop(): T | undefined {
        //limits the length to 0, so it doesn't go negative
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            
            //if there's no head, return undefined to avoid popping an empty stack
            return head?.value;
        }
        const head = this.head as QNode<T>;
        this.head = head.prev;

        return head.value;
    }

    // peek is the same as in Queue, returns the value of the head
    peek(): T | undefined {
        return this.head?.value;
}
}
//Example: If you wanna detach the Node "F" from the stack
// A -> B -> C -> D -> E -> F
//1. Set the pointer to F, so we can access it
//2. Update head to point back to the previous node
//3. Return the value that's contained within F

//Big O: O(1) - constant time, because we're only accessing the head
//and updating the head to point to the previous node