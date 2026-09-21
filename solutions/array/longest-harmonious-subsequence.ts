/**
 * 最长和谐子序列
 * 难度：★★☆☆☆
 * 和谐子序列的最大值与最小值之差正好为 1。返回最长长度。
 *
 * 示例：nums = [1,3,2,2,5,2,3,7] => 5
 *
 * 思路：统计频次，相邻数值的频次之和取最大。
 * 时间 O(n)，空间 O(n)
 */

export function findLHS(nums: number[]): number {
  const count = new Map<number, number>();
  for (const num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }
  let best = 0;
  for (const [num, freq] of count) {
    const higher = count.get(num + 1);
    if (higher !== undefined) {
      best = Math.max(best, freq + higher);
    }
  }
  return best;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
