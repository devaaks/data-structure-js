import {SinglyLinkedList} from './singly.linked-list';

const main = () => {
    console.log(`\n====================== Singly Linked List ====================== `);
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.addNode(1);
    singlyLinkedList.addNode(2);
    singlyLinkedList.addNode(3);
    console.log(`\nQueue after enqueue operation: `, queue.print());

    queue.dequeue();
    console.log(`Queue after pop operation: `, queue.print());
}

export default main;
