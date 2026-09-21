/**
 * 无重复字符的 K 长子串个数
 * 难度：★★☆☆☆
 * 返回字符串中长度为 k 且没有重复字符的子串个数。
 *
 * 示例：s = "havefunonleetcode", k = 5 => 6
 *
 * 思路：定长窗口统计字符种类，种类等于 k 时计数。
 * 时间 O(n)，空间 O(k)
 */

export function numKLenSubstrNoRepeats(s: string, k: number): number {
  if (k > s.length || k === 0) {
    return 0;
  }
  const freq = new Map<string, number>();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) ?? 0) + 1);
    if (i >= k) {
      const outgoing = s[i - k];
      const next = (freq.get(outgoing) ?? 0) - 1;
      if (next === 0) {
        freq.delete(outgoing);
      } else {
        freq.set(outgoing, next);
      }
    }
    if (i >= k - 1 && freq.size === k) {
      result++;
    }
  }
  return result;
}

console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5));
