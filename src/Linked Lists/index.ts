class Queue {
    queue: number[];
    constructor() {
        this.queue = [];
    }

    enqueue(data: number) {
        return this.queue.push(data);
    }

    dequeue() {
        return this.queue.shift();
    }

    peak() {
        if (!this.queue.length) return null;
        return this.queue[0];
    }

    print() {
        return this.queue.join(', ');
    }
}

const main = () => {
    console.log(`\n====================== Queue ====================== `);
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(`\nQueue after enqueue operation: `, queue.print());

    queue.dequeue();
    console.log(`Queue after pop operation: `, queue.print());
}

export default main;
