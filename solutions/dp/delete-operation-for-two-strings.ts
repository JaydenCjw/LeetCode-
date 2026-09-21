/**
 * 两个字符串的删除操作
 * 难度：★★★☆☆
 * 每次删掉一个字符，使两个字符串相等，求最少删除次数。
 *
 * 示例：word1 = "sea", word2 = "eat" => 2
 *
 * 思路：保留最长公共子序列，其余字符都要删掉。答案为 m + n - 2 * LCS。
 * 时间 O(mn)，空间 O(mn)
 */

export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return m + n - 2 * dp[m][n];
}

console.log(minDistance("sea", "eat"));
