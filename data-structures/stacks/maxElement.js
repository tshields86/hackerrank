  /* https://www.hackerrank.com/challenges/maximum-element/problem */

class MaxNode {
  constructor(data, next, max) {
    this.data = data;
    this.next = next;
    this.max = max;
  }
};

class MaxStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    this.top = new MaxNode(
      data,
      this.top,
      Math.max(data, this.isEmpty() ? -Infinity : this.top.max)
    );
    this.size++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.top.next;
      this.size--;
    }
  }

  max() {
    if (!this.isEmpty()) console.log(this.top.max);
  }

  isEmpty() {
    return this.size === 0;
  }
};

const actions = {
  1: 'push',
  2: 'pop',
  3: 'max'
};

function processData(input) {
  const inputs = input.split('\n');

  const maxStack = new MaxStack();
  for (let i = 1; i < inputs.length; i++) {
    let [action, val] = inputs[i].split(' ');
    maxStack[actions[action]](val);
  }
} 