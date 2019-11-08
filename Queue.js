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
    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }
  
    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first
    this.first = this.first.next;
  
    if(node === this.last) {
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
  if(first === null) {
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