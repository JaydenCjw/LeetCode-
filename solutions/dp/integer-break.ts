/**
 * 整数拆分
 * 将正整数 n 拆成至少两个正整数之和，使这些整数乘积最大，返回最大乘积。
 *
 * 示例：n = 10 => 36（3*3*4）
 *
 * 思路：dp[i] 为拆分 i 的最大乘积；或优先拆 3。
 * 时间 O(n^2)，空间 O(n)
 */

export function integerBreak(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
}

console.log(integerBreak(2));
console.log(integerBreak(10));
