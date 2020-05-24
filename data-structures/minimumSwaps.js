/* https://www.hackerrank.com/challenges/minimum-swaps-2/problem */

function minimumSwaps(arr) {
  const obj = {};
  let swaps = 0;
  arr.forEach((num, i) => obj[num] = i);

  arr.forEach((num, i, a) => {
    const expectedNum = i + 1;
    if (num !== expectedNum) {
      const whereToMove = obj[expectedNum];
      a[i] = expectedNum;
      obj[expectedNum] = i;
      a[whereToMove] = num;
      obj[num] = whereToMove;
      swaps++;
    }
  });

  return swaps;
}