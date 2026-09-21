/**
 * 两个数组的交集 II
 * 难度：★★☆☆☆
 * 返回两个数组的交集，每个元素出现次数取两边较小值。
 *
 * 示例：nums1 = [1,2,2,1], nums2 = [2,2] => [2,2]
 *
 * 思路：用哈希表统计 nums1 的频次，再扫描 nums2。
 * 时间 O(n + m)，空间 O(n)
 */

export function intersect(nums1: number[], nums2: number[]): number[] {
  const count = new Map<number, number>();
  for (const num of nums1) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }
  const result: number[] = [];
  for (const num of nums2) {
    const left = count.get(num) ?? 0;
    if (left > 0) {
      result.push(num);
      count.set(num, left - 1);
    }
  }
  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
