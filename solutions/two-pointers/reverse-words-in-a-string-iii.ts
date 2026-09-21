/**
 * 反转字符串中的单词 III
 * 难度：★☆☆☆☆
 * 每个单词内部反转，单词之间的空格和顺序保持不变。
 *
 * 示例：s = "Let's take LeetCode contest" => "s'teL ekat edoCteeL tsetnoc"
 *
 * 思路：按空格拆词，逐词反转后再拼回。
 * 时间 O(n)，空间 O(n)
 */

export function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
