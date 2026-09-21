/**
 * 按奇偶排序数组
 * 难度：★☆☆☆☆
 * 把偶数排到奇数前面，相对顺序不作要求。
 *
 * 示例：nums = [3,1,2,4] => [4,2,1,3]
 *
 * 思路：左右指针，左边奇数且右边偶数时交换。
 * 时间 O(n)，空间 O(1)
 */

export function sortArrayByParity(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 === 1) {
      right--;
    } else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
