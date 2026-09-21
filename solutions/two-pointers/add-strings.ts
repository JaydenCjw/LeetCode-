/**
 * 字符串相加
 * 难度：★★☆☆☆
 * 两个非负整数字符串相加，不能直接把它们转成整数。
 *
 * 示例：num1 = "11", num2 = "123" => "134"
 *
 * 思路：从末尾对齐逐位相加并处理进位。
 * 时间 O(max(n, m))，空间 O(max(n, m))
 */

export function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const digits: string[] = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
    const y = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
    const sum = x + y + carry;
    digits.push(String(sum % 10));
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return digits.reverse().join("");
}

console.log(addStrings("11", "123"));
