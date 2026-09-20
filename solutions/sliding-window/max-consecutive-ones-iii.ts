/**
 * 最大连续 1 的个数 III
 * 给定二进制数组 nums 与整数 k，最多翻转 k 个 0，返回最长连续 1 长度。
 *
 * 示例：nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 => 6
 *
 * 思路：滑动窗口，窗口内 0 的个数不超过 k。
 * 时间 O(n)，空间 O(1)
 */

export function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
