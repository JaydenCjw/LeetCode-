/**
 * 198. 打家劫舍
 * 相邻房屋不能同时偷，求能偷到的最大金额。
 *
 * 示例：nums = [2,7,9,3,1] => 12（2+9+1）
 *
 * 思路：dp[i] = max(dp[i-1], dp[i-2] + nums[i])
 * 时间 O(n)，空间 O(1)
 */

export function rob(nums: number[]): number {
  let prev2 = 0;
  let prev1 = 0;

  for (const money of nums) {
    const current = Math.max(prev1, prev2 + money);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(rob([2, 7, 9, 3, 1]));
