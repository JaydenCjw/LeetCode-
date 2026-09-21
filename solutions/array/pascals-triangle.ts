/**
 * 杨辉三角
 * 难度：★★☆☆☆
 * 返回杨辉三角的前 numRows 行。每行两端为 1，中间为上一行相邻两数之和。
 *
 * 示例：numRows = 5 => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * 思路：按行递推。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function generate(numRows: number): number[][] {
  const triangle: number[][] = [];
  for (let row = 0; row < numRows; row++) {
    const current = new Array<number>(row + 1).fill(1);
    for (let col = 1; col < row; col++) {
      current[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }
    triangle.push(current);
  }
  return triangle;
}

console.log(generate(5));
