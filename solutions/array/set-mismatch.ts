/**
 * 错误的集合
 * 难度：★★☆☆☆
 * 集合应为 1..n，但某个数重复、某个数缺失。返回 [重复, 缺失]。
 *
 * 示例：[1,2,2,4] => [2,3]
 *
 * 思路：下标取负标记出现过的数。
 * 时间 O(n)，空间 O(1)
 */

export function findErrorNums(nums: number[]): number[] {
  let duplicate = 0;
  for (const num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] < 0) {
      duplicate = index + 1;
    } else {
      nums[index] = -nums[index];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return [duplicate, i + 1];
    }
  }

  return [duplicate, nums.length];
}

console.log(findErrorNums([1, 2, 2, 4]));
