/**
 * 寻找旋转排序数组中的最小值 II
 * 难度：★★★★☆
 * 升序数组可能旋转，且含重复元素。找出最小值。
 *
 * 示例：[1,3,5] => 1；[2,2,2,0,1] => 0
 *
 * 思路：二分比较中点与右端。中点更大则最小值在右侧；更小则在左侧含中点；相等则缩小右端。
 * 时间 O(n)，空间 O(1)
 */

export function findMin(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else if (nums[mid] < nums[hi]) {
      hi = mid;
    } else {
      hi--;
    }
  }
  return nums[lo];
}

console.log(findMin([1, 3, 5]));
console.log(findMin([2, 2, 2, 0, 1]));
