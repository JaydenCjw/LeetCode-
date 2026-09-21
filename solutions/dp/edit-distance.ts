/**
 * 编辑距离
 * 难度：★★★★☆
 * 返回将 word1 转换成 word2 所需最少操作数（插入/删除/替换）。
 *
 * 示例：word1 = "horse", word2 = "ros" => 3
 *
 * 思路：二维 DP，dp[i][j] 为前缀转换最小代价。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
