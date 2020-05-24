/* https://www.hackerrank.com/challenges/truck-tour/problem */

class Node {
  constructor({ petrol, dist, stop }, next) {
    this.petrol = petrol;
    this.dist = dist;
    this.stop = stop;
    this.next = next;
  }
};

class Queue {
  constructor(array) {
    this.head = this.tail = null;
    this.fill(array)
  }

  fill(array) {
    for (let i = 0; i < array.length; i++) {
      const [petrol, dist] = array[i];
      this.enqueue({ petrol, dist, stop: i });
    }
  }

  enqueue(data, stop) {
    if (this.isEmpty()) this.head = this.tail = new Node(data, this.head);
    else this.tail = this.tail.next = new Node(data, this.head);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const { petrol, dist, stop } = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return { petrol, dist, stop };
  }

  stop() {
    return this.isEmpty() ? null : this.head.stop;
  }

  isEmpty() {
    return this.head === null;
  }
};

function truckTour(petrolpumps) {
  const queue = new Queue(petrolpumps);

  let fuel = 0;
  let stops = 0;

  while (stops < petrolpumps.length) {
    const data = queue.dequeue();
    const { petrol, dist } = data;
    fuel += petrol;

    if (fuel > dist) {
      fuel -= dist;
      stops++;
    } else {
      fuel = 0;
      stops = 0;
    }

    queue.enqueue(data);
  }
  return queue.stop();
}
