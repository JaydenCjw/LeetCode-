/**
 * 最多有 K 个不同字符的最长子串
 * 难度：★★★☆☆
 * 返回最多包含 k 个不同字符的最长子串长度。
 *
 * 示例：s = "eceba", k = 2 => 3
 *
 * 思路：滑动窗口维护字符频次，种类超过 k 时收缩左端。
 * 时间 O(n)，空间 O(k)
 */

export function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  const freq = new Map<string, number>();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) ?? 0) + 1);
    while (freq.size > k) {
      const outgoing = s[left];
      const next = (freq.get(outgoing) ?? 0) - 1;
      if (next === 0) {
        freq.delete(outgoing);
      } else {
        freq.set(outgoing, next);
      }
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
