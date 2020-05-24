/* https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem */

const getCostIndexMap = cost => {
  const map = new Map();
  cost.forEach((c, i) => map.set(c, (map.get(c) || []).concat(i + 1)));
  return map;
};

const findFlavorPairs = (map, money) => {
  for (let [c, idxs] of map.entries()) {
    const c2 = money - c;
    if (map.has(c2)) {
      const c2Idxs = map.get(c2);
      if (c === c2 && c2Idxs.length > 1) return idxs;
      else if (c !== c2) return [idxs[0], c2Idxs[0]];
    }
  }
};

const whatFlavors = (cost, money) => {
  const costIndexMap = getCostIndexMap(cost);
  const result = findFlavorPairs(costIndexMap, money);
  console.log(result.join(' '));
};