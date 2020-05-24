/* https://www.hackerrank.com/challenges/candies/problem */

const giveCandies = (arr, candies = 1) => arr
  .map((cur, i) => {
    let prev = arr[i - 1];
    if (cur > prev) candies++;
    else candies = 1;
    return candies;
  });

function candies(n, arr) {
  const fromLeft = giveCandies(arr);
  const fromRight = giveCandies(arr.reverse()).reverse();

  return fromLeft.reduce((tot, cur, i) => {
    return tot + Math.max(cur, fromRight[i]);
  }, 0);
}