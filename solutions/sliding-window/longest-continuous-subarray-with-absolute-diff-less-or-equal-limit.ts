/**
 * 绝对差不超过限制的最长连续子数组
 * 难度：★★★☆☆
 * 返回连续子数组的最大长度，使其中任意两元素绝对差不超过 limit。
 *
 * 示例：nums = [8,2,4,7], limit = 4 => 2
 *
 * 思路：滑动窗口用两个单调队列维护窗口最大值和最小值。
 * 时间 O(n)，空间 O(n)
 */

export function longestSubarray(nums: number[], limit: number): number {
  const maxDeque: number[] = [];
  const minDeque: number[] = [];
  let maxHead = 0;
  let minHead = 0;
  let left = 0;
  let best = 0;
  for (let right = 0; right < nums.length; right++) {
    while (maxDeque.length > maxHead && nums[maxDeque[maxDeque.length - 1]] < nums[right]) {
      maxDeque.pop();
    }
    while (minDeque.length > minHead && nums[minDeque[minDeque.length - 1]] > nums[right]) {
      minDeque.pop();
    }
    maxDeque.push(right);
    minDeque.push(right);
    while (nums[maxDeque[maxHead]] - nums[minDeque[minHead]] > limit) {
      left++;
      if (maxDeque[maxHead] < left) {
        maxHead++;
      }
      if (minDeque[minHead] < left) {
        minHead++;
      }
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(longestSubarray([8, 2, 4, 7], 4));
