class Node {
    data: number;
    next: Node | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

export class SinglyLinkedList {
    head: Node | null;
    tail: Node | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data: number) {
        const node = new Node(data);
        if (!this.head) {
            this.tail = node;
            this.head = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
                this.tail = node;
            }
        }
    }

    removeNode(data: number) {
        let previous = this.head;
        let current = this.head;
        while (current && previous) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                }
                if (current === this.tail) {
                    if (this.head === null) {
                        this.tail = null;
                    } else {
                        this.tail = previous;
                    }

                }
                previous.next = current.next;
            } else {
                previous = current;
            }
            current = current.next;
        }
    }

    find(data: number) {
        let current = this.head;
        while(current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
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
