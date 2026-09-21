/**
 * 统计完全子数组
 * 难度：★★★☆☆
 * 完全子数组包含原数组中的全部不同元素。返回完全子数组个数。
 *
 * 示例：nums = [1,3,1,2,2] => 4
 *
 * 思路：滑动窗口凑齐全部不同元素后尽量收缩，累加合法起点。
 * 时间 O(n)，空间 O(n)
 */

export function countCompleteSubarrays(nums: number[]): number {
  const total = new Set(nums).size;
  const freq = new Map<number, number>();
  let left = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);
    while (freq.size === total) {
      const leftCount = freq.get(nums[left]) ?? 0;
      if (leftCount === 1) {
        freq.delete(nums[left]);
      } else {
        freq.set(nums[left], leftCount - 1);
      }
      left++;
    }
    result += left;
  }
  return result;
}

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
