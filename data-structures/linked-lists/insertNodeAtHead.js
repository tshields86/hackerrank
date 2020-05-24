/* https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (!head) return head = newNode;
  newNode.next = head;
  return head = newNode;
}