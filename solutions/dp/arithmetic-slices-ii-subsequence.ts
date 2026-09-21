/**
 * 等差数列划分 II - 子序列
 * 难度：★★★★☆
 * 统计数组中长度至少为 3 的等差子序列个数。
 *
 * 示例：[2,4,6,8,10] => 7
 *
 * 思路：dp[i] 记录以 i 结尾、各公差的弱等差子序列条数（长度 ≥ 2）。
 * 每延长一次就把较短的条数计入答案。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function numberOfArithmeticSlices(nums: number[]): number {
  const dp = Array.from({ length: nums.length }, () => new Map<number, number>());
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prev = dp[j].get(diff) ?? 0;
      answer += prev;
      dp[i].set(diff, (dp[i].get(diff) ?? 0) + prev + 1);
    }
  }
  return answer;
}

console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]));
