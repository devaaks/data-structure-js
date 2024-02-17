import { Node } from './utils';

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
}
