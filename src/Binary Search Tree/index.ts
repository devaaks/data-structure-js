class BstNode {
    data: number;
    left: BstNode | null;
    right: BstNode | null;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root: BstNode | null;
    constructor() {
        this.root = null;
    }

    addNode(data: number) {
        const newNode = new BstNode(data);
        if (!this.root) {
            this.root = newNode; 
        } else {
            this.insertNode(this.root, newNode);
        }  
    }

    insertNode(node: BstNode, newNode: BstNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                // @ts-ignore
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                // @ts-ignore
                this.insertNode(node.right, newNode);
            }
        }
    }
}


const main = () => {
    console.log(`\n====================== Binary Search Tree ====================== `);
    const tree = new Tree();
    tree.addNode(1);
    tree.addNode(2);
    tree.addNode(3);
    console.log(`\nBinary search tree after add operation: `, tree);

    // const resultSinglyFind = tree.find(3);
    // console.log(`\nBinary search tree find: `, resultSinglyFind);

    // tree.removeNode(2);
    // console.log(`\nBinary search tree after remove operation: `, tree.getListAsString());
}

export default main;
