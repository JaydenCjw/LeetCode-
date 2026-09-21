/**
 * 根据数字二进制下 1 的数目排序
 * 难度：★★☆☆☆
 * 按二进制中 1 的个数升序；个数相同则按数值升序。
 *
 * 示例：arr=[0,1,2,3,4,5,6,7,8] => [0,1,2,4,8,3,5,6,7]
 *
 * 思路：统计每个数的置位，再排序。
 * 时间 O(n log n * 位数)，空间 O(n)
 */

function bitCount(value: number): number {
  let count = 0;
  let current = value;
  while (current > 0) {
    count += current & 1;
    current >>= 1;
  }
  return count;
}

export function sortByBits(arr: number[]): number[] {
  return arr.slice().sort((a, b) => {
    const bitsA = bitCount(a);
    const bitsB = bitCount(b);
    if (bitsA !== bitsB) {
      return bitsA - bitsB;
    }
    return a - b;
  });
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
