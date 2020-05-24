/* https://www.hackerrank.com/challenges/bigger-is-greater/problem */

const findPivotIndex = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    const prev = arr[i + 1];
    const cur = arr[i];
    if (cur < prev) return i;
  }
  return -1;
};

const findLastIndex = (arr, fxn) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (fxn(arr[i])) return i;
  }
  return -1;
};

const biggerIsGreater = w => {
  const arr = [...w];
  const pivotIndex = findPivotIndex(arr);
  const pivot = arr[pivotIndex];
  const successorIndex = findLastIndex(arr, x => x > pivot);

  if (successorIndex === -1) return 'no answer';
  
  const successor = arr[successorIndex];
  arr[successorIndex] = pivot;
  arr[pivotIndex] = successor;
  const pre = arr.slice(0, pivotIndex + 1);
  const postSort = arr.slice(pivotIndex + 1).sort();

  return [...pre, ...postSort].join('')
};