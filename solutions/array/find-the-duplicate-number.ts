/**
 * 寻找重复数
 * n+1 个数在 [1,n]，恰好一个重复，不能改数组，常数空间，返回重复数。
 *
 * 示例：nums = [1,3,4,2,2] => 2
 *
 * 思路：快慢指针找环入口（链表环思想）。
 * 时间 O(n)，空间 O(1)
 */

export function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
