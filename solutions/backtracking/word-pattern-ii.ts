/**
 * 词语模式 II
 * 难度：★★★★☆
 * 判断能否把模式串双射到 s 的一种划分上，相同字母对应相同子串，不同字母对应不同子串。
 *
 * 示例：pattern = "abab", s = "redblueredblue" => true
 *
 * 思路：回溯枚举当前字母对应的子串长度，用双向映射保证一一对应。
 * 时间 O(n^m)，空间 O(m)
 */

export function wordPatternMatch(pattern: string, s: string): boolean {
  const mapping = new Map<string, string>();
  const used = new Set<string>();

  function dfs(patternIndex: number, stringIndex: number): boolean {
    if (patternIndex === pattern.length) {
      return stringIndex === s.length;
    }
    const ch = pattern[patternIndex];
    const mapped = mapping.get(ch);
    if (mapped !== undefined) {
      if (!s.startsWith(mapped, stringIndex)) {
        return false;
      }
      return dfs(patternIndex + 1, stringIndex + mapped.length);
    }
    for (let end = stringIndex + 1; end <= s.length; end++) {
      const sub = s.slice(stringIndex, end);
      if (used.has(sub)) {
        continue;
      }
      mapping.set(ch, sub);
      used.add(sub);
      if (dfs(patternIndex + 1, end)) {
        return true;
      }
      mapping.delete(ch);
      used.delete(sub);
    }
    return false;
  }

  return dfs(0, 0);
}

console.log(wordPatternMatch("abab", "redblueredblue"));
