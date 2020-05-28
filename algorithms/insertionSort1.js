/* https://www.hackerrank.com/challenges/insertionsort1/problem */

function insertionSort1(n, arr) {
  let temp = arr[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > temp) {
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
    } else {
      arr[i] = temp;
      console.log(arr.join(' '));
      break;
    }
  }
}