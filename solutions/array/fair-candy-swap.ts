/**
 * 公平的糖果交换
 * 难度：★☆☆☆☆
 * Alice 与 Bob 各拿出一盒糖果交换，使双方糖果总数相等，返回一种交换方案 [aliceSize, bobSize]。
 *
 * 示例：aliceSizes = [1,1], bobSizes = [2,2] => [1,2]
 *
 * 思路：设差值的一半为 delta，Bob 需要有 alice + delta。
 * 时间 O(n + m)，空间 O(m)
 */

export function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const total = (sizes: number[]): number => sizes.reduce((sum, size) => sum + size, 0);
  const diff = total(bobSizes) - total(aliceSizes);
  if (diff % 2 !== 0) {
    return [];
  }
  const delta = diff / 2;
  const bob = new Set(bobSizes);
  for (const size of aliceSizes) {
    const target = size + delta;
    if (bob.has(target)) {
      return [size, target];
    }
  }
  return [];
}

console.log(fairCandySwap([1, 1], [2, 2]));
