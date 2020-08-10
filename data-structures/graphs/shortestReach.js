/* https://www.hackerrank.com/challenges/dijkstrashortreach/problem */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
};

class PriorityQueue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(value, priority) {
    this.items[this.size] = new Node(value, priority);
    this.size++;
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.swap(0, this.size - 1);
    const item = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item.value;
  }

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.parent(idx).priority > this.items[idx].priority) {
      let parentIdx = this.parentIdx(idx);
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeft(idx)) {
      let smallerChildIdx = this.leftIdx(idx);
      if (this.hasRight(idx) && this.right(idx).priority < this.left(idx).priority) {
        smallerChildIdx = this.rightIdx(idx);
      }

      if (this.items[idx].priority < this.items[smallerChildIdx].priority) break;

      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx;
    }
  }

  peek() {
    if (this.isEmpty()) return;
    return this.items[0].value;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  leftIdx(parentIdx) { return 2 * parentIdx + 1; }
  rightIdx(parentIdx) { return 2 * parentIdx + 2; }
  parentIdx(childIdx) { return Math.floor((childIdx - 1) / 2); }

  hasLeft(idx) { return this.leftIdx(idx) < this.size; }
  hasRight(idx) { return this.rightIdx(idx) < this.size; }
  hasParent(idx) { return this.parentIdx(idx) >= 0; }

  left(idx) { return this.items[this.leftIdx(idx)]; }
  right(idx) { return this.items[this.rightIdx(idx)]; }
  parent(idx) { return this.items[this.parentIdx(idx)]; }
};

class WeightedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (this.adjList.has(vertex)) return;
    this.adjList.set(vertex, new Map());
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
    this.adjList.get(vertex1).set(
      vertex2,
      Math.min(this.adjList.get(vertex1).get(vertex2) || Infinity, weight)
    );
    this.adjList.get(vertex2).set(
      vertex1,
      Math.min(this.adjList.get(vertex2).get(vertex1) || Infinity, weight)
    );
  }

  removeVertex(vertex) {
    if (!this.adjList.has(vertex)) return;
    this.adjList.get(vertex)
      .forEach(neighbor => this.removeEdge(vertex, neighbor));
    for (let [neighbor] of this.adjList.get(vertex)) {
      this.removeEdge(vertex, neighbor);
    }
    this.adjList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1)) this.adjList.get(vertex1).delete(vertex2);
    if (this.adjList.has(vertex2)) this.adjList.get(vertex2).delete(vertex1);
  }

  dijkstra(start) {
    const weights = new Map();
    const vertices = new PriorityQueue();

    for (let [vertex] of this.adjList) {
      weights.set(vertex, vertex === start ? 0 : Infinity);
      vertices.enqueue(vertex, vertex === start ? 0 : Infinity);
    }

    while (!vertices.isEmpty()) {
      const vertex = vertices.dequeue();

      for (let [current, weight] of this.adjList.get(vertex)) {
        const totWeight = weights.get(vertex) + weight;
        if (totWeight < weights.get(current)) {
          weights.set(current, totWeight);
          vertices.enqueue(current, totWeight);
        }
      }
    }

    return weights;
  }
};

function shortestReach(n, edges, s) {
  const graph = new WeightedGraph();
  for (let [vertex1, vertex2, weight] of edges) {
    graph.addEdge(vertex1, vertex2, weight)
  }

  const weights = graph.dijkstra(s);

  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i === s) continue;
    let weight = weights.get(i) || Infinity;
    result.push(weight !== Infinity ? weight : -1);
  }

  return result;
}