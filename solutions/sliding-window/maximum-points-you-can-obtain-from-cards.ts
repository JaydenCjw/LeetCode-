/**
 * 可获得的最大点数
 * 难度：★★★☆☆
 * 每次只能从数组最左或最右拿走一张卡，恰好拿 k 张，返回最大点数。
 *
 * 示例：cardPoints = [1,2,3,4,5,6,1], k = 3 => 12
 *
 * 思路：先拿左边 k 张，再逐步换成右边的牌，取窗口和的最大值。
 * 时间 O(k)，空间 O(1)
 */

export function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  let window = 0;
  for (let i = 0; i < k; i++) {
    window += cardPoints[i];
  }
  let best = window;
  for (let i = 0; i < k; i++) {
    window -= cardPoints[k - 1 - i];
    window += cardPoints[n - 1 - i];
    best = Math.max(best, window);
  }
  return best;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
