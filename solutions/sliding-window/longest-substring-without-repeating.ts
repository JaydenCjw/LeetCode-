/**
 * 无重复字符的最长子串
 * 难度：★★★☆☆
 * 给定字符串 s，找出不含重复字符的最长子串长度。
 *
 * 示例：s = "abcabcbb" => 3（"abc"）
 *
 * 思路：滑动窗口 + 哈希记录字符上次出现下标。
 * 时间 O(n)，空间 O(k)（字符集大小）
 */

export function lengthOfLongestSubstring(s: string): number {
  const lastIndex = new Map<string, number>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const previous = lastIndex.get(char);
    if (previous !== undefined && previous >= left) {
      left = previous + 1;
    }
    lastIndex.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
