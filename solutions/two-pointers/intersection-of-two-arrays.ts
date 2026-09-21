/**
 * 两个数组的交集
 * 难度：★☆☆☆☆
 * 返回两个数组共同出现的不同整数，顺序不限。
 *
 * 示例：nums1 = [1,2,2,1], nums2 = [2,2] => [2]
 *
 * 思路：用集合记录一边，扫描另一边去重输出。
 * 时间 O(n + m)，空间 O(n + m)
 */

export function intersection(nums1: number[], nums2: number[]): number[] {
  const values = new Set(nums1);
  const result: number[] = [];
  const used = new Set<number>();
  for (const num of nums2) {
    if (values.has(num) && !used.has(num)) {
      used.add(num);
      result.push(num);
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
