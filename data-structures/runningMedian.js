/* https://www.hackerrank.com/challenges/find-the-running-median/problem */

class MinHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  getParentIndex(childIndex) { return Math.ceil((childIndex - 2) / 2); }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(indexOne, indexTwo) {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  peek() {
    if (!this.size) return null;
    return this.items[0];
  }

  poll() {
    if (!this.size) return null;
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
};

class MaxHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  getParentIndex(childIndex) { return Math.ceil((childIndex - 2) / 2); }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(indexOne, indexTwo) {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  peek() {
    if (!this.size) return null;
    return this.items[0];
  }

  poll() {
    if (!this.size) return null;
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] > this.items[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
};

const addNumber = (number, lowers, highers) => {
  if (!lowers.size || number < lowers.peek()) {
    lowers.add(number);
  } else highers.add(number);
};

const rebalance = (lowers, highers) => {
  const biggerHeap = lowers.size > highers.size ? lowers : highers;
  const smallerHeap = lowers.size > highers.size ? highers : lowers;
  if (biggerHeap.size - smallerHeap.size >= 2) {
    smallerHeap.add(biggerHeap.poll());
  }
};

const getMedian = (lowers, highers) => {
  const biggerHeap = lowers.size > highers.size ? lowers : highers;
  const smallerHeap = lowers.size > highers.size ? highers : lowers;
  if (biggerHeap.size === smallerHeap.size) {
    return (biggerHeap.peek() + smallerHeap.peek()) / 2;
  }
  return biggerHeap.peek();
};

const runningMedian = array => {
  const lowers = new MaxHeap();
  const highers = new MinHeap();
  const medians = [];

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    addNumber(number, lowers, highers);
    rebalance(lowers, highers);
    medians[i] = getMedian(lowers, highers).toFixed(1);
  }

  return medians;
};