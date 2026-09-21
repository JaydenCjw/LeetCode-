/**
 * 最大连续 1 的个数
 * 难度：★☆☆☆☆
 * 二进制数组中最长连续 1 的个数。
 *
 * 示例：[1,1,0,1,1,1] => 3
 *
 * 思路：遇 0 清零，否则累加并更新最大值。
 * 时间 O(n)，空间 O(1)
 */

export function findMaxConsecutiveOnes(nums: number[]): number {
  let current = 0;
  let best = 0;
  for (const num of nums) {
    current = num === 1 ? current + 1 : 0;
    best = Math.max(best, current);
  }
  return best;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
