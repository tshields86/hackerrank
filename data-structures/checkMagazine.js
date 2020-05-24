/* https://www.hackerrank.com/challenges/ctci-ransom-note/problem */

const getWordFrequency = words => {
  const map = new Map();
  words.forEach(word => map.set(word, (map.get(word) || 0) + 1));
  return map;
};

const getWordDelta = (map, words) => {
  words.forEach(word => map.set(word, (map.get(word) || 0) - 1));
  return map;
};

const hasEnoughWords = map => {
  for (let [word, count] of map.entries()) {
    if (count > 0) return 'No';
  }
  return 'Yes';
};

const checkMagazine = (magazine, note) => {
  let wordMap = getWordFrequency(note);
  wordMap = getWordDelta(wordMap, magazine);
  const result = hasEnoughWords(wordMap);
  console.log(result);
};
