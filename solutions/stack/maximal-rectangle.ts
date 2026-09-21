/**
 * 最大矩形
 * 难度：★★★★☆
 * 字符矩阵只含 "0" 和 "1"。返回只由 "1" 组成的最大矩形面积。
 *
 * 示例：
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] => 6
 *
 * 思路：把每一行当作直方图的底，高度是向上连续的 1。再用单调栈求直方图最大矩形。
 * 时间 O(行 * 列)，空间 O(列)
 */

function largestRectangle(heights: number[]): number {
  const stack = [-1];
  let best = 0;
  for (let i = 0; i <= heights.length; i += 1) {
    const height = i === heights.length ? 0 : heights[i];
    while (stack.length > 1 && heights[stack[stack.length - 1]] > height) {
      const index = stack.pop() ?? 0;
      const width = i - stack[stack.length - 1] - 1;
      best = Math.max(best, heights[index] * width);
    }
    stack.push(i);
  }
  return best;
}

export function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  const heights = new Array<number>(matrix[0].length).fill(0);
  let best = 0;
  for (const row of matrix) {
    for (let col = 0; col < row.length; col += 1) {
      heights[col] = row[col] === "1" ? heights[col] + 1 : 0;
    }
    best = Math.max(best, largestRectangle(heights));
  }
  return best;
}

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]),
);
