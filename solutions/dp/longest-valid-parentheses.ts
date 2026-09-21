/**
 * 最长有效括号
 * 难度：★★★★☆
 * 只含 '(' 和 ')' 的字符串中，最长有效括号子串的长度。
 *
 * 示例："(()" => 2；")()())" => 4
 *
 * 思路：dp[i] 表示以 i 结尾的最长有效长度；遇到 ')' 时匹配对应 '('。
 * 时间 O(n)，空间 O(n)
 */

export function longestValidParentheses(s: string): number {
  const dp = new Array<number>(s.length).fill(0);
  let best = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== ")") {
      continue;
    }
    if (s[i - 1] === "(") {
      dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
    } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
      const before = i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0;
      dp[i] = dp[i - 1] + 2 + before;
    }
    best = Math.max(best, dp[i]);
  }
  return best;
}

console.log(longestValidParentheses(")()())"));
