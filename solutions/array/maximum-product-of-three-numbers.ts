/**
 * 三个数的最大乘积
 * 难度：★★☆☆☆
 * 返回数组中任意三个数乘积的最大值。
 *
 * 示例：[1,2,3,4] => 24
 *
 * 思路：最大的三个数之积，或最小两个负数与最大正数之积，取较大者。
 * 时间 O(n)，空间 O(1)
 */

export function maximumProduct(nums: number[]): number {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

console.log(maximumProduct([1, 2, 3, 4]));
