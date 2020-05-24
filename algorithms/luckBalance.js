/* https://www.hackerrank.com/challenges/luck-balance/problem */

function luckBalance(k, contests) {
  const {
    impArr,
    unimpTotal
  } = contests.reduce((acc, [points, type]) => {
    if (type === 1) acc.impArr.push(points);
    else acc.unimpTotal += points;
    return acc;
  }, {
    impArr: [],
    unimpTotal: 0
  });

  impArr.sort((a, b) => b - a);

  const {
    posLuck,
    negLuck
  } = impArr.reduce((acc, cur, i) => {
    if (i < k) acc.posLuck += cur;
    else acc.negLuck += cur;
    return acc;
  }, {
    posLuck: 0,
    negLuck: 0
  });

  return unimpTotal + posLuck - negLuck;
}