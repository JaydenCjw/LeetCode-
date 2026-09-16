/**
 * 567. 字符串的排列
 * 判断 s2 是否包含 s1 的排列（任意顺序）。
 *
 * 示例：s1 = "ab", s2 = "eidbaooo" => true（包含 "ba"）
 *
 * 思路：固定窗口长度 = s1.length，比较字符频次。
 * 时间 O(n)，空间 O(1)（26 字母）
 */

export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const need = new Array<number>(26).fill(0);
  const window = new Array<number>(26).fill(0);
  const base = "a".charCodeAt(0);

  for (const char of s1) {
    need[char.charCodeAt(0) - base]++;
  }

  const matches = (a: number[], b: number[]): boolean => {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  for (let right = 0; right < s2.length; right++) {
    window[s2.charCodeAt(right) - base]++;
    if (right >= s1.length) {
      window[s2.charCodeAt(right - s1.length) - base]--;
    }
    if (right >= s1.length - 1 && matches(need, window)) {
      return true;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
