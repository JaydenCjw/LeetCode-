/**
 * 替换后的最长重复字符
 * 最多可将字符串中任意字符替换 k 次，求可得最长重复字符子串长度。
 *
 * 示例：s = "AABABBA", k = 1 => 4
 *
 * 思路：滑动窗口，维护窗口内最多字符次数；窗口长度 - maxCount > k 则收缩。
 * 时间 O(n)，空间 O(1)
 */

export function characterReplacement(s: string, k: number): number {
  const count = new Array<number>(26).fill(0);
  const base = "A".charCodeAt(0);
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - base;
    count[index]++;
    maxCount = Math.max(maxCount, count[index]);

    while (right - left + 1 - maxCount > k) {
      count[s.charCodeAt(left) - base]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement("AABABBA", 1));
