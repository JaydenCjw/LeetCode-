/**
 * 最大连续 1 的个数 II
 * 难度：★★★☆☆
 * 最多把一个 0 变成 1，返回最长连续 1 的长度。
 *
 * 示例：nums = [1,0,1,1,0] => 4
 *
 * 思路：滑动窗口内最多保留一个 0。
 * 时间 O(n)，空间 O(1)
 */

export function findMaxConsecutiveOnes(nums: number[]): number {
  let left = 0;
  let zeros = 0;
  let best = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
