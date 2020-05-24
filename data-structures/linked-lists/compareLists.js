/* https://www.hackerrank.com/challenges/compare-two-linked-lists/problem */

function compareLists(llist1, llist2) {
  let node1 = llist1, node2 = llist2;

  while (node1 || node1) {
    if (!node1 || !node2 || node1.data !== node2.data) return 0;
    node1 = node1.next;
    node2 = node2.next;
  }
  return 1;
}