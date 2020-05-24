/* https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  if (position === 0) {
    newNode.next = head;
    return head = newNode;
  }

  let node = head;
  for (let i = 1; i < position; i++) {
    node = node.next
  }
  newNode.next = node.next;
  node.next = newNode;
  return head;
}
