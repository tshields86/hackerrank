/* https://www.hackerrank.com/challenges/crush/problem */

function arrayManipulation(n, queries) {
  const diffs = [];

  queries.forEach(([start, end, addOn]) => {
    diffs[start] = diffs[start]
      ? diffs[start] + addOn
      : addOn;
    diffs[end + 1] = diffs[end + 1]
      ? diffs[end + 1] - addOn
      : 0 - addOn;
  });

  return diffs.reduce((acc, cur) => ({
    max: Math.max(acc.max, acc.total + cur),
    total: acc.total + cur
  }), {
    max: 0,
    total: 0
  }).max;
}
