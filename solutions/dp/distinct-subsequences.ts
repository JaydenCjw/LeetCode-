/**
 * 不同的子序列
 * 难度：★★★★☆
 * 求 s 的子序列中等于 t 的个数。
 *
 * 示例：s = "rabbbit", t = "rabbit" => 3
 *
 * 思路：dp[i][j] 为 s 前 i 个字符组成 t 前 j 个字符的方案数。
 * 字符相等时加上用掉当前字符的方案。
 * 时间 O(mn)，空间 O(mn)
 */

export function numDistinct(s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
}

console.log(numDistinct("rabbbit", "rabbit"));
