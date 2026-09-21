/**
 * 从左右两边拿字符
 * 难度：★★★☆☆
 * 每分钟从字符串左端或右端拿走一个字符。返回使 a、b、c 都至少拿到 k 个的最少分钟，不可能则返回 -1。
 *
 * 示例：s = "aabaaaacaabc", k = 2 => 8
 *
 * 思路：等价于保留中间最长子串，且每种字符被删掉的数量不超过总数减 k。
 * 时间 O(n)，空间 O(1)
 */

export function takeCharacters(s: string, k: number): number {
  const total = [0, 0, 0];
  for (const ch of s) {
    total[ch.charCodeAt(0) - 97]++;
  }
  if (total[0] < k || total[1] < k || total[2] < k) {
    return -1;
  }
  const limit = [total[0] - k, total[1] - k, total[2] - k];
  const window = [0, 0, 0];
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    window[s.charCodeAt(right) - 97]++;
    while (window[0] > limit[0] || window[1] > limit[1] || window[2] > limit[2]) {
      window[s.charCodeAt(left) - 97]--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return s.length - best;
}

console.log(takeCharacters("aabaaaacaabc", 2));
