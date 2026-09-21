/**
 * 删除有序数组中的重复项 II
 * 难度：★★☆☆☆
 * 每个元素最多保留两次，返回新长度。
 *
 * 示例：[1,1,1,2,2,3] => 5，数组前五位为 [1,1,2,2,3]
 *
 * 思路：慢指针写入，与前两个位置比较是否已出现两次。
 * 时间 O(n)，空间 O(1)
 */

export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}

const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums), nums);
