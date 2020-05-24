/* https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem */

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);

  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i + 1]))
  }
  return min;
}