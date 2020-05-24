/* https://www.hackerrank.com/challenges/ctci-merge-sort/problem */

function merge(a, b) {
  let count = a.count + b.count;
  let i = 0, j = 0;
  let temp = [];

  while (i < a.arr.length && j < b.arr.length) {
    if (a.arr[i] > b.arr[j]) {
      temp.push(b.arr[j]);
      j++;
      count += a.arr.length - i;
    } else {
      temp.push(a.arr[i]);
      i++;
    }
  }

  temp = [...temp, ...a.arr.slice(i), ...b.arr.slice(j)]
  return { arr: temp, count }
}

function mergeSort({ arr, count }) {
  if (arr.length === 1) return { arr, count };
  const middle = Math.floor(arr.length / 2);
  const left = { arr: arr.slice(0, middle), count };
  const right = { arr: arr.slice(middle), count };
  return merge(mergeSort(left), mergeSort(right));
}

function countInversions(arr) {
  return mergeSort({ arr, count: 0 }).count;
}