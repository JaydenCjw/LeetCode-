/**
 * 四数之和
 * 找出数组中所有不重复的四元组，使四数之和等于 target。
 *
 * 示例：nums = [1,0,-1,0,-2,2], target = 0
 * => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 * 思路：排序 + 双层枚举 + 双指针。
 * 时间 O(n^3)，空间 O(1)（不计输出）
 */

export function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  const sorted = [...nums].sort((a, b) => a - b);
  const n = sorted.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        const sum = sorted[i] + sorted[j] + sorted[left] + sorted[right];
        if (sum === target) {
          result.push([sorted[i], sorted[j], sorted[left], sorted[right]]);
          left++;
          right--;
          while (left < right && sorted[left] === sorted[left - 1]) left++;
          while (left < right && sorted[right] === sorted[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
