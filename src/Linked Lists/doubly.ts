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

    find(data: number) {
        let cursor = this.head;
        while (cursor) {
            if (cursor.data === data) return true;
            cursor = cursor.next;
        }
        return false;
    }

    removeNode(data: number) {
        if (this.head === null) return;

        let cursor = this.head;

        while (cursor) {
            if (cursor.data === data) {
                if (cursor.data === this.head.data) {   // if it is first
                    const newHead = this.head.next as DoublyLinkedListNode;
    
                    this.head = newHead
                } else if (this.tail && cursor.data === this.tail.data) {      // if it is last
                    const current = cursor;
                    const previous = current.previous;

                    this.tail = previous;
                    // @ts-ignore
                    previous.next = null;
                    current.next = null;
                } else {                                // if it is in middle
                    const current = cursor;
                    const previous = current.previous;
                    const next = current.next;

                    // @ts-ignore
                    previous.next = next;
                    // @ts-ignore
                    next.previous = previous; 

                    current.next = null;
                    current.previous = null;
                }
            }
            //@ts-ignore
            cursor = cursor.next;
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
