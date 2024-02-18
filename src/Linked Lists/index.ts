import {SinglyLinkedList} from './singly';
import {DoublyLinkedList} from './doubly';

const main = () => {
    console.log(`\n====================== Singly Linked List ====================== `);
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.addNode(1);
    singlyLinkedList.addNode(2);
    singlyLinkedList.addNode(3);
    console.log(`\nSingly linked list after add operation: `, singlyLinkedList.getListAsString());

    const resultSinglyFind = singlyLinkedList.find(3);
    console.log(`\nSingly linked list find: `, resultSinglyFind);

    singlyLinkedList.removeNode(2);
    console.log(`\nSingly linked list after remove operation: `, singlyLinkedList.getListAsString());

    console.log(`\n====================== Doubly Linked List ====================== `);
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.addNode(1);
    doublyLinkedList.addNode(2);
    doublyLinkedList.addNode(3);
    console.log(`\nDoubly linked list after add operation: `, doublyLinkedList.getListAsString());

    const resultdoublyFind = doublyLinkedList.find(3);
    console.log(`\nDoubly linked list find: `, resultdoublyFind);

    doublyLinkedList.removeNode(3);
    console.log(`\nDoubly linked list after remove operation: `, doublyLinkedList.getListAsString());
}

export default main;
