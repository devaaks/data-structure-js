class DoublyLinkedListNode {
    previous:  DoublyLinkedListNode | null;
    data: number;
    next: DoublyLinkedListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

export class DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;
    length: number;
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    addNode(data: number) {
        const node = new DoublyLinkedListNode(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            // @ts-ignore: possible null check
            this.tail.next = node;
            this.tail = node;
        }
    }

    getListAsString() {
        let cursor = this.head;
        let linkedListItems = '';
        while (cursor) {
            linkedListItems += cursor.data;
            if (cursor.next !== null) {
                linkedListItems +=  ", ";
            }
            cursor = cursor.next;
        }
        return linkedListItems;
    }
}
