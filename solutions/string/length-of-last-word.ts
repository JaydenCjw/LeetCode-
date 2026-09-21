/**
 * 最后一个单词的长度
 * 难度：★☆☆☆☆
 * 返回字符串中最后一个单词的长度。单词由非空格字符组成。
 *
 * 示例："Hello World" => 5
 *
 * 思路：从尾部跳过空格再计数。
 * 时间 O(n)，空间 O(1)
 */

export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i--;
  }
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
}

console.log(lengthOfLastWord("Hello World"));
