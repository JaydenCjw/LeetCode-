/**
 * 正则表达式匹配
 * 难度：★★★★★
 * 实现支持 '.' 和 '*' 的正则匹配，'*' 匹配零个或多个前一个字符，完整匹配整个字符串。
 *
 * 示例：s = "aab", p = "c*a*b" => true
 *
 * 思路：dp[i][j] 表示 s 前 i 个与 p 前 j 个是否匹配。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function isMatch(s: string, p: string): boolean {
  const dp = Array.from({ length: s.length + 1 }, () => new Array<boolean>(p.length + 1).fill(false));
  dp[0][0] = true;

  for (let j = 2; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2] || ((p[j - 2] === "." || p[j - 2] === s[i - 1]) && dp[i - 1][j]);
      } else if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[s.length][p.length];
}

console.log(isMatch("aab", "c*a*b"));
