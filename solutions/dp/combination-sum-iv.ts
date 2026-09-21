/**
 * 组合总和 Ⅳ
 * 难度：★★★☆☆
 * 给定互不相同的正整数，求和为 target 的排列数（顺序不同算不同）。
 *
 * 示例：nums = [1,2,3], target = 4 => 7
 *
 * 思路：外层目标和、内层数字，按排列计数。
 * 时间 O(target * n)，空间 O(target)
 */

export function combinationSum4(nums: number[], target: number): number {
  const dp = new Array<number>(target + 1).fill(0);
  dp[0] = 1;
  for (let sum = 1; sum <= target; sum++) {
    for (const num of nums) {
      if (num <= sum) {
        dp[sum] += dp[sum - num];
      }
    }
  }
  return dp[target];
}

console.log(combinationSum4([1, 2, 3], 4));
