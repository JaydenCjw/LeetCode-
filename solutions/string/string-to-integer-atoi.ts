/**
 * 字符串转换整数 (atoi)
 * 难度：★★★☆☆
 * 实现 atoi：丢弃前导空白，可选正负号，读入数字直到非数字，溢出则钳制到 32 位有符号范围。
 *
 * 示例：s = "   -42" => -42；s = "4193 with words" => 4193
 *
 * 思路：状态机式扫描。
 * 时间 O(n)，空间 O(1)
 */

export function myAtoi(s: string): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let i = 0;
  while (i < s.length && s[i] === " ") i++;

  let sign = 1;
  if (i < s.length && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  let result = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = Number(s[i]);
    if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}

console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
