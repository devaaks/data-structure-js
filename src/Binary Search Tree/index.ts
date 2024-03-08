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

    remove(data: number) {
    this.root = this.removeNode(this.root, data)
    }
    
    removeNode(node: BstNode | null, data: number) {
    if (!node) {
        return null;
    }
    if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (!node.left && !node.right) {
        node = null;
        return node;
        }
        if (!node.left) {
        node = node.right;
        return node;
        } 
        if (!node.right) {
        node = node.left;
        return node;
        }
        
        let min = this.findMinNode(node.right);
        node.data = min.data;
        node.right = this.removeNode(node.right, min.data);
        return node;
    }
    }

    findMinNode(right: BstNode) {
        // TODO
    }

    inOrder(node: BstNode | null) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
         }
    }

    preOrder(node: BstNode | null) {

    }

    postOrder(node: BstNode | null) {

    }

    traverse(mode: 'INORDER' | 'PREORDER' | 'POSTORDER'){
        switch (mode) {
            case 'INORDER':
                this.inOrder(this.root);
                break;
            
            case 'PREORDER':
                this.preOrder(this.root);
                break;

            case 'POSTORDER':
                this.postOrder(this.root);
                break;
        
            default:
                break;
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

    console.log(` ========== Tranverseing: inorder `);
    tree.traverse('INORDER');

    // const resultSinglyFind = tree.find(3);
    // console.log(`\nBinary search tree find: `, resultSinglyFind);

    // tree.removeNode(2);
    // console.log(`\nBinary search tree after remove operation: `, tree.getListAsString());
}

export default main;
