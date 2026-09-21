/**
 * 通配符匹配
 * 难度：★★★★☆
 * `?` 匹配一个字符，`*` 匹配任意长度（含空）。判断 s 是否匹配模式 p。
 *
 * 示例：s = "adceb", p = "*a*b" => true
 *
 * 思路：dp[i][j] 表示 s 前 i 个与 p 前 j 个是否匹配。`*` 可匹配空串或吃掉一个字符。
 * 时间 O(mn)，空间 O(mn)
 */

export function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;
  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
    new Array<boolean>(n + 1).fill(false),
  );
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
}

console.log(isMatch("adceb", "*a*b"));
