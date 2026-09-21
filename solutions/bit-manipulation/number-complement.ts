/**
 * 数字的补数
 * 对不带前导零的正整数二进制按位取反，返回十进制结果。
 *
 * 示例：num = 5（101）=> 2（010）
 *
 * 思路：构造与 num 同长度的全 1 掩码再异或。
 * 时间 O(log n)，空间 O(1)
 */

export function findComplement(num: number): number {
  let mask = 1;
  while (mask < num) {
    mask = (mask << 1) | 1;
  }
  return num ^ mask;
}

console.log(findComplement(5));
console.log(findComplement(1));
