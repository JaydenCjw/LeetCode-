/**
 * 解码方法 II
 * 难度：★★★★☆
 * 数字串含 `*`（可代表 1-9）。按 A-Z 对应 1-26 解码，求方案数，对 10^9+7 取模。
 *
 * 示例：s = "*" => 9；s = "1*" => 18
 *
 * 思路：滚动记录前一位、前两位方案。单独统计当前字符和两字符组合在含通配符时的合法解码数。
 * 时间 O(n)，空间 O(1)
 */

const MOD = 1_000_000_007;

function singleWays(char: string): number {
  if (char === "*") {
    return 9;
  }
  if (char === "0") {
    return 0;
  }
  return 1;
}

function pairWays(left: string, right: string): number {
  if (left === "*" && right === "*") {
    return 15;
  }
  if (left === "*") {
    return right <= "6" ? 2 : 1;
  }
  if (right === "*") {
    if (left === "1") {
      return 9;
    }
    if (left === "2") {
      return 6;
    }
    return 0;
  }
  const value = Number(left + right);
  return value >= 10 && value <= 26 ? 1 : 0;
}

export function numDecodings(s: string): number {
  let prev2 = 1;
  let prev1 = singleWays(s[0]);
  for (let i = 1; i < s.length; i++) {
    const current =
      (prev1 * singleWays(s[i]) + prev2 * pairWays(s[i - 1], s[i])) % MOD;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(numDecodings("*"));
console.log(numDecodings("1*"));
