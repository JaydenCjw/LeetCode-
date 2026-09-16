/**
 * 300. 最长递增子序列
 * 返回数组中最长严格递增子序列的长度。
 *
 * 示例：nums = [10,9,2,5,3,7,101,18] => 4（[2,3,7,101]）
 *
 * 思路：耐心排序 + 二分维护递增尾巴。
 * 时间 O(n log n)，空间 O(n)
 */

export function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }

  return tails.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
