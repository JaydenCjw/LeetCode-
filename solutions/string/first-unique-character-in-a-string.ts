/**
 * 字符串中的第一个唯一字符
 * 难度：★☆☆☆☆
 * 返回第一个只出现一次的字符下标，不存在则 -1。
 *
 * 示例："leetcode" => 0；"aabb" => -1
 *
 * 思路：计数后从头找次数为 1 的字符。
 * 时间 O(n)，空间 O(1)（字符集有限）
 */

export function firstUniqChar(s: string): number {
  const count = new Map<string, number>();
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("leetcode"));
