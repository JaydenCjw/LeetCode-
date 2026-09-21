/**
 * 递增的三元子序列
 * 难度：★★★☆☆
 * 判断是否存在下标 i < j < k，使 nums[i] < nums[j] < nums[k]。
 *
 * 示例：[1,2,3,4,5] => true；[5,4,3,2,1] => false
 *
 * 思路：维护目前最小、次小值，能更新到第三个数即成立。
 * 时间 O(n)，空间 O(1)
 */

export function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
