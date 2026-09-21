/**
 * 删除子数组的最大得分
 * 难度：★★★☆☆
 * 得分为元素互不相同的连续子数组之和。返回能得到的最大得分。
 *
 * 示例：nums = [4,2,4,5,6] => 17
 *
 * 思路：滑动窗口保证元素唯一，重复时从左端删到上一次出现位置。
 * 时间 O(n)，空间 O(n)
 */

export function maximumUniqueSubarray(nums: number[]): number {
  const last = new Map<number, number>();
  let left = 0;
  let sum = 0;
  let best = 0;
  for (let right = 0; right < nums.length; right++) {
    const previous = last.get(nums[right]);
    if (previous !== undefined && previous >= left) {
      while (left <= previous) {
        sum -= nums[left];
        left++;
      }
    }
    sum += nums[right];
    last.set(nums[right], right);
    best = Math.max(best, sum);
  }
  return best;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
