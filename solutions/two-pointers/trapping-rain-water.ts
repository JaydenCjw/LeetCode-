/**
 * 接雨水
 * 给定非负整数数组 height 表示柱子高度，计算按此排列能接多少雨水。
 *
 * 示例：height = [0,1,0,2,1,0,1,3,2,1,2,1] => 6
 *
 * 思路：双指针维护左右最高墙，短板侧可结算积水。
 * 时间 O(n)，空间 O(1)
 */

export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
