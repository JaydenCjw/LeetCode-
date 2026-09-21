/**
 * 最长递增子序列的个数
 * 难度：★★★☆☆
 * 统计严格递增且长度最长的子序列个数。
 *
 * 示例：[1,3,5,4,7] => 2
 *
 * 思路：len[i] 为以 i 结尾的 LIS 长度，cnt[i] 为对应条数。更长则重置，等长则累加。
 * 时间 O(n^2)，空间 O(n)
 */

export function findNumberOfLIS(nums: number[]): number {
  const n = nums.length;
  const length = new Array<number>(n).fill(1);
  const count = new Array<number>(n).fill(1);
  let maxLength = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) {
        continue;
      }
      if (length[j] + 1 > length[i]) {
        length[i] = length[j] + 1;
        count[i] = count[j];
      } else if (length[j] + 1 === length[i]) {
        count[i] += count[j];
      }
    }
    maxLength = Math.max(maxLength, length[i]);
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (length[i] === maxLength) {
      answer += count[i];
    }
  }
  return answer;
}

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
