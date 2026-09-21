/**
 * 密钥格式化
 * 难度：★★☆☆☆
 * 去掉破折号，字母转大写，再从右向左每 k 个字符用破折号分组。
 *
 * 示例：s = "5F3Z-2e-9-w", k = 4 => "5F3Z-2E9W"
 *
 * 思路：先倒序收集有效字符，按 k 分组后再倒回来。
 * 时间 O(n)，空间 O(n)
 */

export function licenseKeyFormatting(s: string, k: number): string {
  const raw: string[] = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-") {
      raw.push(s[i].toUpperCase());
    }
  }
  const groups: string[] = [];
  for (let i = 0; i < raw.length; i += k) {
    groups.push(raw.slice(i, i + k).reverse().join(""));
  }
  return groups.reverse().join("-");
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
