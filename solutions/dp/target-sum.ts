/**
 * 目标和
 * 给数组每个元素加 + 或 -，使表达式结果等于 target，返回方法数。
 *
 * 示例：nums = [1,1,1,1,1], target = 3 => 5
 *
 * 思路：转化为子集和 = (sum + target) / 2 的 0-1 背包计数。
 * 时间 O(n*sum)，空间 O(sum)
 */

export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (Math.abs(target) > sum || (sum + target) % 2 !== 0) {
    return 0;
  }

  const subset = (sum + target) / 2;
  const dp = new Array<number>(subset + 1).fill(0);
  dp[0] = 1;

  for (const num of nums) {
    for (let j = subset; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }

  return dp[subset];
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
