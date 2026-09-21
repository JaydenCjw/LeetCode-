/**
 * 二进制求和
 * 难度：★☆☆☆☆
 * 给定两个二进制字符串，返回它们的和（二进制字符串）。
 *
 * 示例：a = "11", b = "1" => "100"
 *
 * 思路：从低位模拟进位。
 * 时间 O(max(m, n))，空间 O(max(m, n))
 */

export function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? Number(a[i]) : 0) + (j >= 0 ? Number(b[j]) : 0) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  return result;
}

console.log(addBinary("11", "1"));
