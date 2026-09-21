/**
 * 最短回文串
 * 难度：★★★★☆
 * 只能在字符串前面添加字符，使结果成为回文，并尽量短。
 *
 * 示例：s = "aacecaaa" => "aaacecaaa"
 *
 * 思路：KMP 求 s + '#' + reverse(s) 的最长前后缀，这段就是 s 里最长的回文前缀，其余后缀反转后接到前面。
 * 时间 O(n)，空间 O(n)
 */

export function shortestPalindrome(s: string): string {
  const reversed = s.split("").reverse().join("");
  const combined = `${s}#${reversed}`;
  const lps = new Array<number>(combined.length).fill(0);
  let length = 0;
  for (let i = 1; i < combined.length; ) {
    if (combined[i] === combined[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      i++;
    }
  }
  const prefix = lps[lps.length - 1];
  return reversed.slice(0, s.length - prefix) + s;
}

console.log(shortestPalindrome("aacecaaa"));
