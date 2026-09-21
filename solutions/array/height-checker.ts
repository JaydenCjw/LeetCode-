/**
 * 高度检查器
 * 难度：★☆☆☆☆
 * 学生按身高非递减排队，返回与当前排列位置不同的人数。
 *
 * 示例：heights = [1,1,4,2,1,3] => 3
 *
 * 思路：复制后排序，与原数组逐位比较。
 * 时间 O(n log n)，空间 O(n)
 */

export function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((left, right) => left - right);
  let mismatches = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      mismatches++;
    }
  }
  return mismatches;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
