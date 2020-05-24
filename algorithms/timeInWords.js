/* https://www.hackerrank.com/challenges/the-time-in-words/problem */

const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];

function timeInWords(h, m) {
  const hour = m <= 30 ? words[h] : words[h === 12 ? 1 : h + 1];
  const minutes = m <= 30 ? words[m] : words[60 - m];
  const adjective = m <= 30 ? 'past' : 'to';
  if (m === 0) return `${hour} o' clock`;
  if (m === 15 || m === 30 || m === 45) return `${minutes} ${adjective} ${hour}`;
  const noun = m === 1 || m === 59 ? 'minute' : 'minutes';
  return `${minutes} ${noun} ${adjective} ${hour}`
}