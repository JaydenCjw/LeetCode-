/**
 * 比特位计数
 * 给定非负整数 n，返回长度为 n+1 的数组 ans，ans[i] 为 i 的二进制中 1 的个数。
 *
 * 示例：n = 5 => [0,1,1,2,1,2]
 *
 * 思路：dp[i] = dp[i >> 1] + (i & 1)
 * 时间 O(n)，空间 O(1)（不计输出）
 */

export function countBits(n: number): number[] {
  const dp = new Array<number>(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}

console.log(countBits(5));
