/**
 * 三数之和
 * 难度：★★★☆☆
 * 找出所有和为 0 且不重复的三元组。
 *
 * 示例：nums = [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
 *
 * 思路：排序后固定一个数，剩余部分用双指针找两数之和。
 * 时间 O(n^2)，空间 O(1)（不计输出）
 */

export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
