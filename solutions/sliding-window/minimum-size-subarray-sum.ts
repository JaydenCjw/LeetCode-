/**
 * 长度最小的子数组
 * 难度：★★★☆☆
 * 找出数组中满足和 ≥ target 的长度最小的连续子数组，不存在则返回 0。
 *
 * 示例：target = 7, nums = [2,3,1,2,4,3] => 2（[4,3]）
 *
 * 思路：滑动窗口，右扩累积，左缩直到不满足条件。
 * 时间 O(n)，空间 O(1)
 */

export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let sum = 0;
  let minLength = Number.POSITIVE_INFINITY;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return Number.isFinite(minLength) ? minLength : 0;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
