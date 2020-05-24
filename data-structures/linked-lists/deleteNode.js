/* https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem */

function deleteNode(head, position) {
  if (position === 0) return head = head.next;

  let node = head;
  for (let i = 1; i < position; i++) {
    node = node.next;
  }
  node.next = node.next.next;
  return head;
}