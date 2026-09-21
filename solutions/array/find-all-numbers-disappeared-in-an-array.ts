/**
 * 找到所有数组中消失的数字
 * 难度：★★☆☆☆
 * 数组长度为 n，元素在 1..n 之间，找出未出现的数字。
 *
 * 示例：nums = [4,3,2,7,8,2,3,1] => [5,6]
 *
 * 思路：把每个值对应下标的元素标成负数，仍为正的位置即缺失数字。
 * 时间 O(n)，空间 O(1)（不计输出）
 */

export function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  const missing: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
