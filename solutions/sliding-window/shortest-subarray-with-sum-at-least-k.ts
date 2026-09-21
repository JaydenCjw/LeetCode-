/**
 * 和至少为 K 的最短子数组
 * 难度：★★★★☆
 * 返回和至少为 k 的最短连续子数组长度，不存在则返回 -1。数组可含负数。
 *
 * 示例：nums = [2,-1,2], k = 3 => 3
 *
 * 思路：前缀和配合单调队列，队头是更小且更早的前缀，队尾保持递增。
 * 时间 O(n)，空间 O(n)
 */

export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const deque: number[] = [];
  let head = 0;
  let best = Number.POSITIVE_INFINITY;
  for (let i = 0; i <= n; i++) {
    while (head < deque.length && prefix[i] - prefix[deque[head]] >= k) {
      best = Math.min(best, i - deque[head]);
      head++;
    }
    while (head < deque.length && prefix[deque[deque.length - 1]] >= prefix[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  return best === Number.POSITIVE_INFINITY ? -1 : best;
}

console.log(shortestSubarray([2, -1, 2], 3));
