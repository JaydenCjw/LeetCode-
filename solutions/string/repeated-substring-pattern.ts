/**
 * 重复的子字符串
 * 难度：★★☆☆☆
 * 判断字符串能否由某个非空子串重复至少两次拼接而成。
 *
 * 示例：s = "abab" => true；s = "aba" => false
 *
 * 思路：s 若由重复子串构成，则它会出现在 (s + s) 去掉首尾字符后的串里。
 * 时间 O(n)，空间 O(n)
 */

export function repeatedSubstringPattern(s: string): boolean {
  return (s + s).slice(1, -1).includes(s);
}

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
