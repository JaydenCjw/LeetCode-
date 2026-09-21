/**
 * 最长的美好子字符串
 * 难度：★★☆☆☆
 * 美好字符串中，每个出现过的字母都同时有大写和小写。返回最长的美好子串，有多个则返回最先找到的一个。
 *
 * 示例：s = "YazaAay" => "aAa"
 *
 * 思路：枚举子串，用位掩码记录大小写是否成对。
 * 时间 O(n^2)，空间 O(1)
 */

export function longestNiceSubstring(s: string): string {
  let best = "";
  for (let i = 0; i < s.length; i++) {
    let lower = 0;
    let upper = 0;
    for (let j = i; j < s.length; j++) {
      const code = s.charCodeAt(j);
      if (code >= 97) {
        lower |= 1 << (code - 97);
      } else {
        upper |= 1 << (code - 65);
      }
      if (lower === upper && j - i + 1 > best.length) {
        best = s.slice(i, j + 1);
      }
    }
  }
  return best;
}

console.log(longestNiceSubstring("YazaAay"));
