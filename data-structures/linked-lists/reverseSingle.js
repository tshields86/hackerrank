/* https://www.hackerrank.com/challenges/reverse-a-linked-list/problem */

function reverseSingle(head, prev = null) {
  if (head.next) {
    const nextHead = head.next;
    head.next = prev;
    return reverseSingle(nextHead, head);
  }
  head.next = prev;
  return head;
}