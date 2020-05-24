/* https://www.hackerrank.com/challenges/queue-using-two-stacks/problem */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(data) {
    if (this.isEmpty()) this.head = this.tail = new Node(data);
    else this.tail = this.tail.next = new Node(data);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const data = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return data;
  }

  peek() {
    let data = this.isEmpty() ? null : this.head.data;
    console.log(data);
  }

  isEmpty() {
    return this.head === null;
  }
};

const actions = {
  1: 'enqueue',
  2: 'dequeue',
  3: 'peek'
};

function processData(input) {
  const inputs = input.split('\n');

  const queue = new Queue();
  for (let i = 1; i < inputs.length; i++) {
    let [action, val] = inputs[i].split(' ');
    queue[actions[action]](val);
  }
}