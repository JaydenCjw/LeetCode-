/**
 * 移除元素
 * 难度：★☆☆☆☆
 * 原地删除所有等于 val 的元素，返回新长度。
 *
 * 示例：nums = [3,2,2,3], val = 3 => 2，前两个元素为 2,2
 *
 * 思路：快慢指针覆盖保留元素。
 * 时间 O(n)，空间 O(1)
 */

export function removeElement(nums: number[], val: number): number {
  let slow = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[slow] = num;
      slow++;
    }
  }
  return slow;
}

const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3), nums);
