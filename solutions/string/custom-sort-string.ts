/**
 * 自定义字符串排序
 * 难度：★★☆☆☆
 * 按 order 中字符的顺序重排 s。order 里没有的字符接在后面，同字符保持相对顺序。
 *
 * 示例：order = "cba", s = "abcd" => "cbad"
 *
 * 思路：统计 s 的频次，先按 order 输出，再输出剩余字符。
 * 时间 O(n + m)，空间 O(1)（字符集固定）
 */

export function customSortString(order: string, s: string): string {
  const count = new Map<string, number>();
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  let result = "";
  for (const ch of order) {
    const times = count.get(ch) ?? 0;
    result += ch.repeat(times);
    count.delete(ch);
  }
  for (const [ch, times] of count) {
    result += ch.repeat(times);
  }
  return result;
}

console.log(customSortString("cba", "abcd"));
