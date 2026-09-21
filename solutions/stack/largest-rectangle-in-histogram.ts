/**
 * 柱状图中最大的矩形
 * 难度：★★★★★
 * heights[i] 表示柱高，求可勾勒出的最大矩形面积。
 *
 * 示例：heights = [2,1,5,6,2,3] => 10
 *
 * 思路：单调递增栈，找左右第一个更矮柱。
 * 时间 O(n)，空间 O(n)
 */

export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [-1];
  let maxArea = 0;
  const extended = [...heights, 0];

  for (let i = 0; i < extended.length; i++) {
    while (stack.length > 1 && extended[i] < extended[stack[stack.length - 1]]) {
      const height = extended[stack.pop()!];
      const width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
