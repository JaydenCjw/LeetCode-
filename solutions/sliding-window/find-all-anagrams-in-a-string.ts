/**
 * 找到字符串中所有字母异位词
 * 难度：★★★☆☆
 * 返回 s 中所有 p 的异位词子串起始索引。
 *
 * 示例：s = "cbaebabacd", p = "abc" => [0,6]
 *
 * 思路：固定窗口 + 字符频次差值为 0 即匹配。
 * 时间 O(n)，空间 O(1)
 */

export function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) {
    return [];
  }

  const need = new Array<number>(26).fill(0);
  const window = new Array<number>(26).fill(0);
  const base = "a".charCodeAt(0);
  const result: number[] = [];

  for (const char of p) {
    need[char.charCodeAt(0) - base]++;
  }

  const matches = (): boolean => {
    for (let i = 0; i < 26; i++) {
      if (need[i] !== window[i]) return false;
    }
    return true;
  };

  for (let right = 0; right < s.length; right++) {
    window[s.charCodeAt(right) - base]++;
    if (right >= p.length) {
      window[s.charCodeAt(right - p.length) - base]--;
    }
    if (right >= p.length - 1 && matches()) {
      result.push(right - p.length + 1);
    }
  }

  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
