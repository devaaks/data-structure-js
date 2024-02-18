import {SinglyLinkedList} from './singly';

const main = () => {
    console.log(`\n====================== Singly Linked List ====================== `);
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.addNode(1);
    singlyLinkedList.addNode(2);
    singlyLinkedList.addNode(3);
    console.log(`\nSingly linked list after add operation: `, singlyLinkedList.getListAsString());

    singlyLinkedList.removeNode(2);
    console.log(`\nSingly linked list after remove operation: `, singlyLinkedList.getListAsString());
}

export default main;
