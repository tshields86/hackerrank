/* https://www.hackerrank.com/challenges/bfsshortreach/problem */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.head === null;
  }
};

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    if (this.adjList.has(node)) return;
    this.adjList.set(node, new Set());
  }

  addEdge(nodeA, nodeB) {
    if (!this.adjList.has(nodeA) || !this.adjList.has(nodeB)) return;
    this.adjList.get(nodeA).add(nodeB);
    this.adjList.get(nodeB).add(nodeA);
  }

  getDistancesBFS(start) {
    const queue = new Queue();
    const explored = new Set([start]);
    queue.enqueue([start, 6]);
    const distances = new Map();

    while (!queue.isEmpty()) {
      const [node, dist] = queue.dequeue();
      for (let n of this.adjList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          queue.enqueue([n, dist + 6]);
          distances.set(n, dist);
        }
      }
    }
    return distances;
  }
}

function bfs(n, m, edges, s) {
  const graph = new Graph();

  // Add all nodes to adjacency list 
  for (let i = 1; i <= n; i++) {
    graph.addNode(i);
  }

  // Add all edges to adjacency list
  edges.forEach(([nodeA, nodeB]) => graph.addEdge(nodeA, nodeB));

  // Get all distances from start node
  const distances = graph.getDistancesBFS(s);

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i === s) continue;
    result.push(distances.get(i) || -1);
  }

  return result;
}