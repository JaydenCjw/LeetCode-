/**
 * 七进制数
 * 难度：★☆☆☆☆
 * 把整数转换成七进制字符串。负数保留负号。
 *
 * 示例：num=100 => "202"；num=-7 => "-10"
 *
 * 思路：对绝对值反复除以 7 取余，再补上符号。
 * 时间 O(log |num|)，空间 O(位数)
 */

export function convertToBase7(num: number): string {
  if (num === 0) {
    return "0";
  }
  const sign = num < 0 ? "-" : "";
  let value = Math.abs(num);
  let digits = "";
  while (value > 0) {
    digits = String(value % 7) + digits;
    value = Math.floor(value / 7);
  }
  return sign + digits;
}

console.log([convertToBase7(100), convertToBase7(-7)]);
