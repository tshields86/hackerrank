/* https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem */

function findMergeNode(headA, headB) {
  let a = headA;
  let b = headB;
  while (a != b) {
    a = a.next ? a.next : headB;
    b = b.next ? b.next : headA;
  }
  return a.data;
}