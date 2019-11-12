//6. Create a queue using Singly liked list
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const node = new _Node(value);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function createQueue() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  starTrekQ.dequeue('Kirk');
  starTrekQ.dequeue('Spock');

  return starTrekQ;
}
// console.log(JSON.stringify(createQueue()));

function peek(queue) {
  let first = queue.first;
  return first;
}
// console.log(peek(createQueue()));

function isEmpty(queue) {
  let first = queue.first;
  if (first === null) {
    return true;
  }
  return false;
}
// console.log(isEmpty(createQueue()));

function display(queue) {
  let displayQueue = queue;
  console.log(JSON.stringify(displayQueue));
}
// display(createQueue()); //Need to remove Kirk first, since FIFO

class _dlNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class dQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _dlNode(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function dlq() {
  const dlQueue = new dQueue();
  dlQueue.enqueue('Kirk');
  dlQueue.enqueue('Spock');
  dlQueue.enqueue('Uhura');
  dlQueue.enqueue('Sulu');
  dlQueue.enqueue('Checkov');

  return dlQueue;
}

function squareDance() {
  const male = new Queue();
  const female = new Queue();

  male.enqueue('Frank');
  male.enqueue('John');
  male.enqueue('Sherlock');
  male.enqueue('David');
  male.enqueue('Christopher');

  female.enqueue('Jane');
  female.enqueue('Madonna');
  female.enqueue('Beyonce');

  let currMale = male.first;
  let currFem = female.first;

  while (currFem !== null && currMale !== null) {
    if (currMale && currFem) {
      male.dequeue();
      female.dequeue();
    }
    currMale = currMale.next;
    currFem = currFem.next;
  }
  return JSON.stringify(female);
}

// console.log(squareDance());


function ophidianBank() {
  const queue = new Queue();
  
  for(let i = 0; i < 100; i++) {
    queue.enqueue(i);
    const person = queue.enqueue;

    if(Math.random() < 0.25) {
      queue.enqueue(person);
    } else {
      queue.dequeue();
    }
  }
  return queue;
}

console.log(ophidianBank());