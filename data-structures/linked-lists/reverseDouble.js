/* https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem */

function reverseDouble(head) {
  let temp = null;
  let cur = head;

  while (cur) {
      temp = cur.prev;
      cur.prev = cur.next;
      cur.next = temp;
      cur = cur.prev;
  }

  if (temp) head = temp.prev;
  
  return head;
}