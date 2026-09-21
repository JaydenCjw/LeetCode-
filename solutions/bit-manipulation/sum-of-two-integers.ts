/**
 * 两整数之和
 * 难度：★★☆☆☆
 * 不用 + 和 - 计算两整数之和。
 *
 * 思路：异或得无进位和，与运算左移得进位，循环直到进位为 0。
 * 时间 O(1)，空间 O(1)
 */

export function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }
  return a;
}

console.log(getSum(1, 2));
