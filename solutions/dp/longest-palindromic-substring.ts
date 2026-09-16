/**
 * 5. 最长回文子串
 * 给定字符串 s，返回其中最长的回文子串。
 *
 * 示例：s = "babad" => "bab"（或 "aba"）
 *
 * 思路：中心扩展（奇偶中心）；也可 DP，此处用中心扩展更简洁。
 * 时间 O(n^2)，空间 O(1)
 */

export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  const expand = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;
      if (length > maxLength) {
        start = left;
        maxLength = length;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return s.slice(start, start + maxLength);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
