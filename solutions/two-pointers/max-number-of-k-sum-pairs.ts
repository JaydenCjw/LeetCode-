/**
 * K 和数对的最大数目
 * 难度：★★☆☆☆
 * 每次选出和为 k 的两个数并删除，返回最多能进行的操作次数。
 *
 * 示例：nums = [1,2,3,4], k = 5 => 2
 *
 * 思路：排序后双指针向中间配对。
 * 时间 O(n log n)，空间 O(1)
 */

export function maxOperations(nums: number[], k: number): number {
  nums.sort((left, right) => left - right);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(maxOperations([1, 2, 3, 4], 5));
