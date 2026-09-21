/**
 * 判断子序列
 * 难度：★☆☆☆☆
 * 判断 s 是否为 t 的子序列（不要求连续，但保持相对顺序）。
 *
 * 示例：s = "abc", t = "ahbgdc" => true
 *
 * 思路：双指针沿 t 匹配 s。
 * 时间 O(n)，空间 O(1)
 */

export function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (const ch of t) {
    if (i < s.length && s[i] === ch) {
      i++;
    }
  }
  return i === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
