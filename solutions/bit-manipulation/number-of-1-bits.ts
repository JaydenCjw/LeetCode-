/**
 * 位 1 的个数
 * 难度：★☆☆☆☆
 * 返回无符号整数二进制表示中 1 的个数。
 *
 * 示例：11（1011）=> 3
 *
 * 思路：n & (n-1) 每次消掉最低位的 1。
 * 时间 O(1)，空间 O(1)
 */

export function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
}

console.log(hammingWeight(11));
