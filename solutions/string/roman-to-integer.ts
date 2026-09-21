/**
 * 罗马数字转整数
 * 难度：★☆☆☆☆
 * 将罗马数字转换成整数。小数字在大数字左边表示减法。
 *
 * 示例："III" => 3；"IV" => 4；"MCMXCIV" => 1994
 *
 * 思路：从左到右，当前值小于下一位则减去，否则加上。
 * 时间 O(n)，空间 O(1)
 */

export function romanToInt(s: string): number {
  const value: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = value[s[i]];
    const next = value[s[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  return total;
}

console.log(romanToInt("MCMXCIV"));
