/**
 * 十进制整数的反码
 * 难度：★☆☆☆☆
 * 返回整数二进制表示按位取反后的结果。0 的反码是 1。
 *
 * 示例：5 => 2；7 => 0；10 => 5
 *
 * 思路：构造与 n 相同位宽的全 1 掩码再异或。
 * 时间 O(1)，空间 O(1)
 */

export function bitwiseComplement(n: number): number {
  if (n === 0) {
    return 1;
  }
  let mask = 1;
  while (mask < n) {
    mask = (mask << 1) | 1;
  }
  return n ^ mask;
}

console.log(bitwiseComplement(5), bitwiseComplement(7), bitwiseComplement(10));
