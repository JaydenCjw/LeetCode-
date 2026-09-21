/**
 * 删除有序数组中的重复项
 * 原地删除重复项，使每个元素只出现一次，返回新长度。
 *
 * 示例：nums = [0,0,1,1,1,2,2,3,3,4] => 5，nums 前 5 位为 [0,1,2,3,4]
 *
 * 思路：快慢指针。
 * 时间 O(n)，空间 O(1)
 */

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

const sample = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(sample), sample.slice(0, 5));
