/**
 * 盛最多水的容器
 * 给定 n 条垂线，选两条线与 x 轴构成容器，使盛水最多，返回最大水量。
 *
 * 示例：height = [1,8,6,2,5,4,8,3,7] => 49
 *
 * 思路：左右双指针，每次移动较短边以期望获得更大高度。
 * 时间 O(n)，空间 O(1)
 */

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
