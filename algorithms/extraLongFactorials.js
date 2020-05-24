/* https://www.hackerrank.com/challenges/extra-long-factorials/problem */

function extraLongFactorials(n) {
  let sum = BigInt(1);
  for (let i = n; i > 0; i--) {
    sum *= BigInt(i);
  }
  console.log(sum.toString());
}