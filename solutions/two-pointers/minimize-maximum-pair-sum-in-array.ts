/**
 * 最小化最大对和
 * 难度：★★☆☆☆
 * 把长度为偶数的数组分成 n/2 对，每对之和的最大值要尽量小，返回这个最小值。
 *
 * 示例：nums = [3,5,2,3] => 7
 *
 * 思路：排序后最小与最大配对，最大对和即为答案。
 * 时间 O(n log n)，空间 O(1)
 */

export function minPairSum(nums: number[]): number {
  nums.sort((left, right) => left - right);
  let best = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    best = Math.max(best, nums[left] + nums[right]);
    left++;
    right--;
  }
  return best;
}

console.log(minPairSum([3, 5, 2, 3]));
