/**
 * 字符串的分数
 * 难度：★☆☆☆☆
 * 分数是相邻字符 ASCII 码绝对差之和。
 *
 * 示例：s = "hello" => 13
 *
 * 思路：从第二个字符起累加与前一个字符的绝对差。
 * 时间 O(n)，空间 O(1)
 */

export function scoreOfString(s: string): number {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return score;
}

console.log(scoreOfString("hello"));
