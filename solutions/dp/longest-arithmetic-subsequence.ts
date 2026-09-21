/**
 * 最长等差数列
 * 难度：★★★☆☆
 * 返回数组中最长等差子序列的长度。
 *
 * 示例：[3,6,9,12] => 4
 *
 * 思路：dp[i].get(d) 为以 i 结尾、公差为 d 的最长长度。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function longestArithSeqLength(nums: number[]): number {
  const dp = Array.from({ length: nums.length }, () => new Map<number, number>());
  let best = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const length = (dp[j].get(diff) ?? 1) + 1;
      dp[i].set(diff, length);
      best = Math.max(best, length);
    }
  }
  return best;
}

console.log(longestArithSeqLength([3, 6, 9, 12]));
