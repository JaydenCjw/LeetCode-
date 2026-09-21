/**
 * 整数转罗马数字
 * 难度：★★☆☆☆
 * 把 1..3999 的整数转换成罗马数字。
 *
 * 示例：1994 => "MCMXCIV"
 *
 * 思路：从大到小贪心减去面值（含减法组合）。
 * 时间 O(1)，空间 O(1)
 */

export function intToRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }
  return result;
}

console.log(intToRoman(1994));
