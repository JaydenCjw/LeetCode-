/**
 * 摆动序列
 * 难度：★★☆☆☆
 * 相邻差值正负交替的最长子序列长度。
 *
 * 示例：[1,7,4,9,2,5] => 6
 *
 * 思路：上升、下降各自延续。
 * 时间 O(n)，空间 O(1)
 */

export function wiggleMaxLength(nums: number[]): number {
  let up = 1;
  let down = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
