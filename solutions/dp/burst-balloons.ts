/**
 * 戳气球
 * 难度：★★★★★
 * nums 两端视为 1。戳破下标 i 得到 nums[left]*nums[i]*nums[right] 金币，求最大金币。
 *
 * 示例：[3,1,5,8] => 167
 *
 * 思路：区间 DP，枚举最后戳破的气球。
 * 时间 O(n^3)，空间 O(n^2)
 */

export function maxCoins(nums: number[]): number {
  const values = [1, ...nums, 1];
  const n = values.length;
  const dp = Array.from({ length: n }, () => new Array<number>(n).fill(0));

  for (let length = 2; length < n; length++) {
    for (let left = 0; left + length < n; left++) {
      const right = left + length;
      for (let k = left + 1; k < right; k++) {
        dp[left][right] = Math.max(
          dp[left][right],
          values[left] * values[k] * values[right] + dp[left][k] + dp[k][right],
        );
      }
    }
  }

  return dp[0][n - 1];
}

console.log(maxCoins([3, 1, 5, 8]));
