/**
 * Queue
 * 
 * O(1)
 */
// class Queue {
//     constructor() {
//         this.stack = [];
//     }

//     enqueue(item) {
//         this.stack.push(item);
//     }

//     dequeue() {
//         return this.stack.shift();
//     }

//     size() {
//         return this.stack.length;
//     }
// }

// Hash table
class Queue {
    #storage = {}
    #first = 0;
    #last = 0;

    enqueue(item) {
        this.#storage[this.#last] = item;
        this.#last++;
    }

    dequeue() {
        if ( this.size === 0 ) return;

        const value = this.#storage[this.#first];
        delete this.#storage[this.#first];
        this.#first++;
        return value;
    }

    get size() {
        return this.#last - this.#first;
    }
}

const table = new Queue();

table.enqueue(1);
table.enqueue(2);
table.enqueue(42);
table.dequeue();

// Linked List
class LinkedList {
    #length = 0;
    #head = null;
    #tail = null;

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if ( this.#length === 0 ) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail = node;
        }

        this.#length++;
    }

    removeFromHead() {
        if ( this.#length === 0 ) return;

        const value = this.#head.value;
        this.#head = this.#head.next;
        this.#length--;
        return value;
    }

    size() {
        return this.#length;
    }
}

class Queue2 extends LinkedList {
    constructor() {
        super();

        this.enqueue = this.addToTail;
        this.dequeue = this.removeFromHead;
    }

    get size() {
        return super.size();
    }
}

const queue1 = new Queue2();
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.dequeue()

console.log(queue1.size);