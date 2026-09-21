/**
 * 有效的字母异位词
 * 难度：★☆☆☆☆
 * 判断 t 是否为 s 的字母异位词。
 *
 * 示例：s = "anagram", t = "nagaram" => true
 *
 * 思路：字符计数，一次加减。
 * 时间 O(n)，空间 O(1)
 */

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array<number>(26).fill(0);
  const base = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - base]++;
    count[t.charCodeAt(i) - base]--;
  }

  return count.every((value) => value === 0);
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
