/**
 * 至多包含两个不同字符的最长子串
 * 难度：★★★☆☆
 * 返回最多包含两种字符的最长子串长度。
 *
 * 示例：s = "eceba" => 3
 *
 * 思路：滑动窗口把不同字符种类限制在 2。
 * 时间 O(n)，空间 O(1)
 */

export function lengthOfLongestSubstringTwoDistinct(s: string): number {
  const freq = new Map<string, number>();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) ?? 0) + 1);
    while (freq.size > 2) {
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

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));
