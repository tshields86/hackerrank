/* https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem */

function hasCycle(head) {
  console.log({ head })
  if (!head) return 0;

  let pointA = head;
  let pointB = head.next;
  while (pointA && pointB && pointB.next) {
    if (pointA === pointB) return 1;
    pointA = pointA.next;
    pointB = pointB.next.next;
  }
  return 0;
}