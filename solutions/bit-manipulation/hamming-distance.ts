/**
 * 汉明距离
 * 难度：★☆☆☆☆
 * 两个整数二进制不同位的个数。
 *
 * 思路：异或后数 1 的个数。
 * 时间 O(1)，空间 O(1)
 */

export function hammingDistance(x: number, y: number): number {
  let xor = x ^ y;
  let count = 0;
  while (xor !== 0) {
    xor &= xor - 1;
    count++;
  }
  return count;
}

console.log(hammingDistance(1, 4));
