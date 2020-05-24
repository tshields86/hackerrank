/* https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem */

function removeDuplicates(head) {
  let node = head;
  while (node.next) {
    if (node.data === node.next.data) node.next = node.next.next;
    else node = node.next;
  }
  return head;
}