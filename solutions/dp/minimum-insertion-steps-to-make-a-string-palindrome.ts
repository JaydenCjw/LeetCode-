/**
 * 让字符串成为回文串的最少插入次数
 * 难度：★★★★☆
 * 可在任意位置插入字符，使字符串成为回文，求最少插入次数。
 *
 * 示例："zzazz" => 0；"mbadm" => 2
 *
 * 思路：最少插入 = n - 最长回文子序列。最长回文子序列等于 s 与反串的 LCS。
 * 时间 O(n^2)，空间 O(n^2)
 */

function longestCommonSubsequence(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

export function minInsertions(s: string): number {
  const reversed = s.split("").reverse().join("");
  return s.length - longestCommonSubsequence(s, reversed);
}

console.log(minInsertions("zzazz"));
console.log(minInsertions("mbadm"));
