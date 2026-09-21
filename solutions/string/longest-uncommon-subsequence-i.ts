/**
 * 最长特殊序列 I
 * 难度：★☆☆☆☆
 * 特殊序列是某个字符串的子序列，且不是另一个字符串的子序列。返回最长特殊序列长度，不存在则返回 -1。
 *
 * 示例：a = "aba", b = "cdc" => 3
 *
 * 思路：两串不等时，较长的那串本身就不是另一串的子序列；相等时不存在。
 * 时间 O(n)，空间 O(1)
 */

export function findLUSlength(a: string, b: string): number {
  if (a === b) {
    return -1;
  }
  return Math.max(a.length, b.length);
}

console.log(findLUSlength("aba", "cdc"));
