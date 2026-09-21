/**
 * 分发糖果
 * 评分数组 ratings，相邻更高分必须更多糖果，每人至少 1 颗，求最少糖果数。
 *
 * 示例：ratings = [1,0,2] => 5
 *
 * 思路：左右各扫一遍取 max。
 * 时间 O(n)，空间 O(n)
 */

export function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = new Array<number>(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, value) => sum + value, 0);
}

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
