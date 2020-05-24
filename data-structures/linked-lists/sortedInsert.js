/* https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem */

function sortedInsert(head, data) {
  const newNode = new DoublyLinkedListNode(data);
  let prev = null;
  let node = head;
  while (node && node.data < data) {
    prev = node;
    node = node.next;
  }
  newNode.next = node;
  if (prev) prev.next = newNode;
  else head = newNode;
  return head;
}