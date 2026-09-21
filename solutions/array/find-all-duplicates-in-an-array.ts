/**
 * 数组中重复的数据
 * 难度：★★★☆☆
 * 长度为 n 的数组，元素在 1..n，有些出现两次，找出所有出现两次的数。要求 O(n) 时间、O(1) 额外空间。
 *
 * 示例：[4,3,2,7,8,2,3,1] => [2,3]
 *
 * 思路：把数值对应下标取负作为访问标记。
 * 时间 O(n)，空间 O(1)
 */

export function findDuplicates(nums: number[]): number[] {
  const result: number[] = [];
  for (const num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }
  return result;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
