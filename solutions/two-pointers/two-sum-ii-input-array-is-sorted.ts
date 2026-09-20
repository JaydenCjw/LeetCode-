/**
 * 两数之和 II - 输入有序数组
 * 在升序数组中找两个数，使其和等于 target，返回下标（从 1 开始）。
 *
 * 示例：numbers = [2,7,11,15], target = 9 => [1,2]
 *
 * 思路：左右双指针向中间收缩。
 * 时间 O(n)，空间 O(1)
 */

export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  throw new Error("未找到满足条件的两个数");
}

console.log(twoSum([2, 7, 11, 15], 9));
