/**
 * 统计最大元素至少出现 K 次的子数组
 * 难度：★★★☆☆
 * 统计连续子数组中，整个数组的最大值至少出现 k 次的个数。
 *
 * 示例：nums = [1,3,2,3,3], k = 2 => 6
 *
 * 思路：滑动窗口数最大值出现次数，一旦达到 k 就收缩，右端对应的合法起点个数累加。
 * 时间 O(n)，空间 O(1)
 */

export function countSubarrays(nums: number[], k: number): number {
  let maxValue = nums[0];
  for (const num of nums) {
    if (num > maxValue) {
      maxValue = num;
    }
  }
  let left = 0;
  let count = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxValue) {
      count++;
    }
    while (count >= k) {
      if (nums[left] === maxValue) {
        count--;
      }
      left++;
    }
    result += left;
  }
  return result;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2));
