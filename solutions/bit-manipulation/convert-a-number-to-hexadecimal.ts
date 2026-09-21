/**
 * 数字转换为十六进制数
 * 难度：★☆☆☆☆
 * 把 32 位整数转成十六进制字符串，负数按补码，去掉前导零。
 *
 * 示例：26 => "1a"；-1 => "ffffffff"
 *
 * 思路：每次取低 4 位映射字符，无符号右移。
 * 时间 O(1)，空间 O(1)
 */

export function toHex(num: number): string {
  if (num === 0) {
    return "0";
  }
  const digits = "0123456789abcdef";
  let value = num >>> 0;
  let result = "";
  while (value > 0) {
    result = digits[value & 15] + result;
    value >>>= 4;
  }
  return result;
}

console.log(toHex(26), toHex(-1));
