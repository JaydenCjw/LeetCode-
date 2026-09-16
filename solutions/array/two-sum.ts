/**
 * 1. 两数之和
 * 给定整数数组 nums 和目标值 target，返回和为 target 的两个数下标。
 * 每种输入只对应一个答案，同一元素不能重复使用。
 *
 * 示例：nums = [2,7,11,15], target = 9 => [0,1]
 *
 * 思路：哈希表一次遍历，用 target - nums[i] 查补数。
 * 时间 O(n)，空间 O(n)
 */

export function twoSum(nums: number[], target: number): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = indexByValue.get(complement);
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    indexByValue.set(nums[i], i);
  }

  throw new Error("未找到满足条件的两个数");
}

console.log(twoSum([2, 7, 11, 15], 9));
