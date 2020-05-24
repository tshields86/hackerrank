/* https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem */

function isValid(s) {
  const letterCount = {};
  for (let l of s) {
    letterCount[l] = (letterCount[l] || 0) + 1;
  }

  const countMap = new Map();
  Object.values(letterCount).forEach(val => {
    countMap.set(val, (countMap.get(val) || 0) + 1);
  });
  const countArr = Array.from(countMap)
    .sort((a, b) => b[1] - a[1]);

  let valid = false;
  if (countArr.length < 2) valid = true;
  else if (countArr.length > 2) valid = false;
  else {
    const [[pNum], [sNum, sCount]] = countArr;
    if (sCount > 1) valid = false;
    else if (sNum === 1 || Math.abs(pNum - sNum) === 1) valid = true;
  }

  return valid ? 'YES' : 'NO';
}