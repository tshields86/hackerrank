/* https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem */

function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let left = head1.data <= head2.data ? head1 : head2;
  let right = left !== head1 ? head1 : head2;

  left.next = mergeLists(left.next, right);

  return left;
}