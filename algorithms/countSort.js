/* https://www.hackerrank.com/challenges/countingsort4/problem */

function countSort(arr) {
  const firstHalf = Math.floor(arr.length / 2);
  const sorted = [];

  arr.forEach((el, i) => {
    if (i < firstHalf) arr[i][1] = '-';
    (sorted[arr[i][0]])
      ? sorted[arr[i][0]].push(arr[i][1])
      : sorted[arr[i][0]] = [arr[i][1]];
  });

  const string = sorted
    .reduce((acc, cur) => acc.concat(cur), [])
    .join(' ');

  console.log(string);
}