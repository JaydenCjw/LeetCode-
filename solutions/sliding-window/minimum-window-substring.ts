/**
 * 最小覆盖子串
 * 难度：★★★★★
 * 在 s 中找出覆盖 t 全部字符的最短子串；不存在返回空串。
 *
 * 示例：s = "ADOBECODEBANC", t = "ABC" => "BANC"
 *
 * 思路：滑动窗口，维护 need / window 计数，收缩左边界求最短。
 * 时间 O(|s|+|t|)，空间 O(字符集)
 */

export function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) {
    return "";
  }

  const need = new Map<string, number>();
  for (const char of t) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  const window = new Map<string, number>();
  let left = 0;
  let valid = 0;
  let start = 0;
  let minLength = Number.POSITIVE_INFINITY;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (need.has(char)) {
      window.set(char, (window.get(char) ?? 0) + 1);
      if (window.get(char) === need.get(char)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left + 1 < minLength) {
        start = left;
        minLength = right - left + 1;
      }
      const removeChar = s[left];
      left++;
      if (need.has(removeChar)) {
        if (window.get(removeChar) === need.get(removeChar)) {
          valid--;
        }
        window.set(removeChar, (window.get(removeChar) ?? 0) - 1);
      }
    }
  }

  return Number.isFinite(minLength) ? s.slice(start, start + minLength) : "";
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
