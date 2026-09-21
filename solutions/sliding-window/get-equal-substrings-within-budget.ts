/**
 * 尽可能使字符串相等
 * 难度：★★★☆☆
 * 可以把 s 的某段改成 t 的对应字符，总开销不超过 maxCost。求最长可改长度。开销为字符 ASCII 差的绝对值。
 *
 * 示例：s = "abcd", t = "bcdf", maxCost = 3 => 3
 *
 * 思路：滑动窗口，右扩左缩，窗口内开销不超过 maxCost。
 * 时间 O(n)，空间 O(1)
 */

export function equalSubstring(s: string, t: string, maxCost: number): number {
  let left = 0;
  let cost = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    best = Math.max(best, right - left + 1);
  }

  return best;
}

console.log(equalSubstring("abcd", "bcdf", 3));
