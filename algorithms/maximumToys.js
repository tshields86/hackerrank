/* https://www.hackerrank.com/challenges/mark-and-toys/problem */

function maximumToys(prices, k) {
  let totalSpent = 0, totalToys = 0;
  const sortedPrices = prices.sort((a, b) => a - b);

  for (let price of sortedPrices) {
    let nextTotalSpent = totalSpent + price;
    if (nextTotalSpent > k) return totalToys;
    totalSpent = nextTotalSpent;
    totalToys++;
  }
}