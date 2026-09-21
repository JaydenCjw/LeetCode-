/**
 * 追加字符以获得子序列
 * 难度：★★☆☆☆
 * 在 s 末尾追加最少字符，使 t 成为 s 的子序列。返回追加长度。
 *
 * 示例：s = "coaching", t = "coding" => 4
 *
 * 思路：双指针贪心匹配 t 已经能在 s 中找到的前缀。
 * 时间 O(n + m)，空间 O(1)
 */

export function appendCharacters(s: string, t: string): number {
  let matched = 0;
  for (let i = 0; i < s.length && matched < t.length; i++) {
    if (s[i] === t[matched]) {
      matched++;
    }
  }
  return t.length - matched;
}

console.log(appendCharacters("coaching", "coding"));
