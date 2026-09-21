/**
 * 解码方法
 * 难度：★★★☆☆
 * 一条包含字母 A-Z 的消息用 1-26 编码。给定数字字符串，求解码方法数。
 *
 * 示例：s = "226" => 3（"BZ","VF","BBF"）
 *
 * 思路：dp[i] 表示前 i 个字符解码数，考虑 1 位/2 位合法切分。
 * 时间 O(n)，空间 O(n)
 */

export function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === "0") {
    return 0;
  }

  const dp = new Array<number>(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const one = Number(s[i - 1]);
    const two = Number(s.slice(i - 2, i));
    if (one >= 1 && one <= 9) {
      dp[i] += dp[i - 1];
    }
    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
