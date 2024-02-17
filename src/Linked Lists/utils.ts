// export type NodeType = { data: number, next: Node | null };

// export function Node(this: NodeType, data: number): NodeType {
//     this.data = data;
//     this.next = null;
//     return this;
// }

export class Node {
    data: number;
    next: Node | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}