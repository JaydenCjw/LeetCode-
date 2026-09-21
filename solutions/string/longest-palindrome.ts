/**
 * 最长回文串
 * 难度：★★☆☆☆
 * 用给定字符（可重排）能组成的最长回文长度。
 *
 * 示例："abccccdd" => 7
 *
 * 思路：偶数次全部使用，奇数次用偶数部分，最后可放一个中心。
 * 时间 O(n)，空间 O(1)
 */

export function longestPalindrome(s: string): number {
  const count = new Map<string, number>();
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  let length = 0;
  let hasOdd = false;
  for (const value of count.values()) {
    length += value - (value % 2);
    if (value % 2 === 1) {
      hasOdd = true;
    }
  }
  return length + (hasOdd ? 1 : 0);
}

console.log(longestPalindrome("abccccdd"));
