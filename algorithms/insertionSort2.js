/* https://www.hackerrank.com/challenges/insertionsort2/problem */

function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr.join(' '));
  }
}