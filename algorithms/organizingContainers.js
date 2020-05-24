/* https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem */

function organizingContainers(container) {
  const numInBoxsArr = [];
  const numOfBallsArrSorted = container.map(box => {
    const numOfBalls = box.reduce((acc, cur, idx) => {
      numInBoxsArr[idx] = numInBoxsArr[idx] ? numInBoxsArr[idx] + cur : cur;
      return acc + cur;
    }, 0);
    return numOfBalls;
  }).sort();
  const numInBoxsArrSorted = numInBoxsArr.sort();

  for (let i = 0; i < numInBoxsArrSorted.length; i++) {
    if (numInBoxsArrSorted[i] !== numOfBallsArrSorted[i]) return 'Impossible';
  }

  return 'Possible';
}