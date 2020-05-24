/* https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (!head) return head = newNode;

  let pointer = head;
  while (pointer.next) {
    pointer = pointer.next;
  }
  pointer.next = new SinglyLinkedListNode(data);

  return head;
}
