/**
 * 特殊数组的特征值
 * 难度：★★☆☆☆
 * 若存在 x，使数组中大于等于 x 的元素恰好有 x 个，返回 x，否则 -1。
 *
 * 示例：[3,5] => 2
 *
 * 思路：二分 x，统计大于等于 x 的个数。
 * 时间 O(n log n)，空间 O(1)
 */

export function specialArray(nums: number[]): number {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = nums.filter((num) => num >= mid).length;
    if (count === mid) {
      return mid;
    }
    if (count > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(specialArray([3, 5]));
