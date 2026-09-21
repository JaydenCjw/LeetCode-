/**
 * 雪糕的最大数量
 * 难度：★★☆☆☆
 * 雪糕价格为 costs[i]，共有 coins 元。每种雪糕最多买一根，求最多能买多少根。
 *
 * 示例：costs = [1,3,2,4,1], coins = 7 => 4
 *
 * 思路：按价格从低到高买，直到钱不够。
 * 时间 O(n log n)，空间 O(1)
 */

export function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let count = 0;
  let remain = coins;
  for (const cost of costs) {
    if (cost > remain) {
      break;
    }
    remain -= cost;
    count++;
  }
  return count;
}

console.log(maxIceCream([1, 3, 2, 4, 1], 7));
