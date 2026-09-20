/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * 在非递减数组中找 target 的起止下标；不存在返回 [-1,-1]。要求 O(log n)。
 *
 * 示例：nums = [5,7,7,8,8,10], target = 8 => [3,4]
 *
 * 思路：两次二分找左边界与右边界。
 * 时间 O(log n)，空间 O(1)
 */

export function searchRange(nums: number[], target: number): number[] {
  const findBound = (findLeft: boolean): number => {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target || (findLeft && nums[mid] === target)) {
        if (nums[mid] === target) bound = mid;
        right = mid - 1;
      } else {
        if (nums[mid] === target) bound = mid;
        left = mid + 1;
      }
    }

    return bound;
  };

  return [findBound(true), findBound(false)];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
