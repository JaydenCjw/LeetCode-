/**
 * 二进制表示中质数个计算置位
 * 难度：★★☆☆☆
 * 统计 [left, right] 中二进制 1 的个数为质数的整数数量。
 *
 * 示例：left = 6, right = 10 => 4
 *
 * 思路：1 的个数不超过 32，预先标记小质数再数位。
 * 时间 O((right-left) * 位数)，空间 O(1)
 */

export function countPrimeSetBits(left: number, right: number): number {
  const prime = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  let count = 0;
  for (let num = left; num <= right; num++) {
    let bits = 0;
    let value = num;
    while (value > 0) {
      bits += value & 1;
      value >>= 1;
    }
    if (prime.has(bits)) {
      count++;
    }
  }
  return count;
}

console.log(countPrimeSetBits(6, 10));
