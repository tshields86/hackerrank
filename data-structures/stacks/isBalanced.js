/* https://www.hackerrank.com/challenges/balanced-brackets/problem */

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    this.top = new Node(data, this.top);
  }

  pop() {
    if (!this.isEmpty()) {
      let data = this.top.data;
      this.top = this.top.next;
      return data;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

const TOKEN_MAP = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
const isOpenSymbol = char => TOKEN_MAP.has(char);
const matches = (openChar, closeChar) => TOKEN_MAP.get(openChar) === closeChar;

function isBalanced(expression) {
  const stack = new Stack();
  for (let char of expression) {
    if (isOpenSymbol(char)) stack.push(char);
    else if (stack.isEmpty() || !matches(stack.pop(), char)) return 'NO';
  }
  return stack.isEmpty() ? 'YES' : 'NO';
}