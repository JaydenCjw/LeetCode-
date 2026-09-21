/**
 * 较小的三数之和
 * 难度：★★★☆☆
 * 统计有多少个三元组 i < j < k，满足 nums[i] + nums[j] + nums[k] < target。
 *
 * 示例：nums = [-2,0,1,3], target = 2 => 2
 *
 * 思路：排序后固定一个数，双指针统计第三个数的合法范围。
 * 时间 O(n^2)，空间 O(1)
 */

export function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((left, right) => left - right);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

console.log(threeSumSmaller([-2, 0, 1, 3], 2));
