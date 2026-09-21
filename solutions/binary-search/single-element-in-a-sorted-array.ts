/**
 * 有序数组中的单一元素
 * 难度：★★☆☆☆
 * 有序数组中除一个元素只出现一次外都出现两次，找出这个元素。要求 O(log n)。
 *
 * 示例：[1,1,2,3,3,4,4,8,8] => 2
 *
 * 思路：成对下标应落在偶数位，二分看中点配对是否被打乱。
 * 时间 O(log n)，空间 O(1)
 */

export function singleNonDuplicate(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 === 1) {
      mid--;
    }
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
