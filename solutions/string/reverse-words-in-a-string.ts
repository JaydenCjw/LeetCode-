/**
 * 反转字符串中的单词
 * 反转句子中单词顺序，单词间以单个空格分隔，去除首尾多余空格。
 *
 * 示例：s = "  hello world  " => "world hello"
 *
 * 思路：按空格拆分过滤后反转再拼接。
 * 时间 O(n)，空间 O(n)
 */

export function reverseWords(s: string): string {
  return s
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
}

console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
