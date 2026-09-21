/**
 * 爬楼梯
 * 每次可爬 1 或 2 阶，到达 n 阶共有多少种方法。
 *
 * 示例：n = 3 => 3（1+1+1 / 1+2 / 2+1）
 *
 * 思路：dp[i] = dp[i-1] + dp[i-2]（斐波那契）。
 * 时间 O(n)，空间 O(1)
 */

export function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(climbStairs(3));
