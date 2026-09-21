/**
 * 找出第 K 小的数对距离
 * 难度：★★★★☆
 * 数对距离是两个下标不同元素的绝对差。返回第 k 小的距离。
 *
 * 示例：nums = [1,3,1], k = 1 => 0
 *
 * 思路：排序后二分距离。双指针统计距离不超过中值的数对个数。
 * 时间 O(n log n + n log D)，空间 O(1)
 */

export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const count = (distance: number): number => {
    let total = 0;
    let right = 0;
    for (let left = 0; left < nums.length; left++) {
      while (right < nums.length && nums[right] - nums[left] <= distance) {
        right++;
      }
      total += right - left - 1;
    }
    return total;
  };
  let lo = 0;
  let hi = nums[nums.length - 1] - nums[0];
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (count(mid) >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

console.log(smallestDistancePair([1, 3, 1], 1));
