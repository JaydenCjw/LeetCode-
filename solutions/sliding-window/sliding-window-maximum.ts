/**
 * 滑动窗口最大值
 * 返回大小为 k 的滑动窗口中每一窗口的最大值。
 *
 * 示例：nums = [1,3,-1,-3,5,3,6,7], k = 3 => [3,3,5,5,6,7]
 *
 * 思路：单调递减双端队列存下标。
 * 时间 O(n)，空间 O(k)
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
