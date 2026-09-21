/**
 * 三角形的最大周长
 * 难度：★☆☆☆☆
 * 从数组中选三条边组成周长最大的三角形。不能组成则返回 0。
 *
 * 示例：[2,1,2] => 5
 *
 * 思路：降序后从大到小找第一组 a < b + c。最大的可行三条边周长最大。
 * 时间 O(n log n)，空间 O(1) 额外
 */

export function largestPerimeter(nums: number[]): number {
  const sides = nums.slice().sort((a, b) => b - a);
  for (let index = 0; index < sides.length - 2; index += 1) {
    if (sides[index] < sides[index + 1] + sides[index + 2]) {
      return sides[index] + sides[index + 1] + sides[index + 2];
    }
  }
  return 0;
}

console.log(largestPerimeter([2, 1, 2]));
