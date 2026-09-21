/**
 * 最长公共子序列
 * 难度：★★★☆☆
 * 返回两个字符串的最长公共子序列长度。
 *
 * 示例：text1 = "abcde", text2 = "ace" => 3（"ace"）
 *
 * 思路：二维 DP，相等则对角 +1，否则取上下较大值。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace"));
