/**
 * 区间内奇数个数
 * 难度：★☆☆☆☆
 * 返回闭区间 [low, high] 中奇数的个数。
 *
 * 示例：low=3, high=7 => 3
 *
 * 思路：不超过 x 的奇数个数是 ceil(x / 2)。用 high 的个数减去 low-1 的个数。
 * 时间 O(1)，空间 O(1)
 */

export function countOdds(low: number, high: number): number {
  const upTo = (value: number): number => Math.floor((value + 1) / 2);
  return upTo(high) - upTo(low - 1);
}

console.log(countOdds(3, 7));
