/**
 * 缺失的第一个正数
 * 难度：★★★★☆
 * 未排序整数数组，找出其中没有出现的最小正整数。要求 O(n) 时间、常数级额外空间。
 *
 * 示例：nums = [3,4,-1,1] => 2
 *
 * 思路：原地哈希，把值 x 放到下标 x-1。
 * 时间 O(n)，空间 O(1)
 */

export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const target = nums[i] - 1;
      [nums[i], nums[target]] = [nums[target], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 2, 0]));
