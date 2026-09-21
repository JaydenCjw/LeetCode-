/**
 * 数组中的 K 个最强值
 * 难度：★★☆☆☆
 * 中位数是排序后下标 (n-1)/2 的元素。|x-中位数| 越大越强；距离相同则数值更大者更强。返回最强的 k 个值，按强弱排序。
 *
 * 示例：arr=[1,2,3,4], k=2 => [4,3]
 *
 * 思路：排序得到中位数，再按强度和数值排序，取前 k 个。
 *
 * 时间 O(n log n)，空间 O(n)
 */

export function getStrongest(arr: number[], k: number): number[] {
  const sorted = arr.slice().sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  sorted.sort((a, b) => {
    const strengthA = Math.abs(a - median);
    const strengthB = Math.abs(b - median);
    if (strengthA !== strengthB) {
      return strengthB - strengthA;
    }
    return b - a;
  });
  return sorted.slice(0, k);
}

console.log(getStrongest([1, 2, 3, 4], 2));
