/* https://www.hackerrank.com/challenges/2d-array/problem */

function hourglassSum(arr) {
  const len = arr.length;
  let max = -Infinity;

  for (let x = 0; x <= len - 3; x++) {
    for (let y = 0; y <= len - 3; y++) {
      let sum = arr[x][y] + arr[x][y + 1] + arr[x][y + 2]
      sum += arr[x + 1][y + 1];
      sum += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];
      if (sum > max) max = sum;
    }
  }

  return max;
}