/* https://www.hackerrank.com/challenges/fibonacci-modified/problem */

function fibonacciModified(t1, t2, n) {
  let ti_2 = BigInt(t1);
  let ti_1 = BigInt(t2);
  let ti;
  for (let i = 0; i < n - 2; i++) {
    ti = ti_2 + ti_1 * ti_1;
    ti_2 = ti_1;
    ti_1 = ti;
  }
  return ti;
}