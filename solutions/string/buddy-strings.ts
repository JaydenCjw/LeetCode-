/**
 * 亲密字符串
 * 难度：★★☆☆☆
 * 交换 s 中恰好两个字符后能否得到 goal。交换的两个位置必须不同。
 *
 * 示例：s = "ab", goal = "ba" => true；s = "aa", goal = "aa" => true
 *
 * 思路：长度不同直接失败。两串相同则需要有重复字符可自交换；否则恰好两处不同且交叉相等。
 * 时间 O(n)，空间 O(1)
 */

export function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }
  if (s === goal) {
    const seen = new Set<string>();
    for (const ch of s) {
      if (seen.has(ch)) {
        return true;
      }
      seen.add(ch);
    }
    return false;
  }
  const diff: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
    if (diff.length > 2) {
      return false;
    }
  }
  return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
}

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("aa", "aa"));
