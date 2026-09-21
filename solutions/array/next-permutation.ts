/**
 * 和下一个排列
 * 实现获取整数数组的下一个字典序更大排列；若不存在则重排为最小排列。要求原地。
 *
 * 示例：nums = [1,2,3] => [1,3,2]
 *
 * 思路：从右找第一个升序对，再找稍大的数交换，后缀反转。
 * 时间 O(n)，空间 O(1)
 */

export function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

const sample = [1, 2, 3];
nextPermutation(sample);
console.log(sample);
