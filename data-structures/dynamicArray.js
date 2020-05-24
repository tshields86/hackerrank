/* https://www.hackerrank.com/challenges/dynamic-array/problem */

function dynamicArray(n, queries) {
  const seqList = [...new Array(n)].map(x => []);
  const resultArr = [];
  let lastAnswer = 0;

  queries.forEach(([q, x, y]) => {
    const idx = (x ^ lastAnswer) % n;
    const seq = seqList[idx];
    if (q === 1) {
      seq.push(y);
    }
    if (q === 2) {
      lastAnswer = seq[y % seq.length];
      resultArr.push(lastAnswer);
    }
  });

  return resultArr;
}