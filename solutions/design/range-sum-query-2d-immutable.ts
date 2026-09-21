/**
 * 二维区域和检索 - 矩阵不可变
 * 难度：★★☆☆☆
 * NumMatrix：sumRegion(row1, col1, row2, col2) 返回子矩阵元素和。矩阵构造后不再修改。
 *
 * 示例：给定 5×5 矩阵。sumRegion(2,1,4,3)=8，sumRegion(1,1,2,2)=11，sumRegion(1,2,2,4)=12
 *
 * 思路：二维前缀和。子矩阵和 = 右下 - 上方 - 左方 + 左上。
 * 时间构造 O(mn)、查询 O(1)，空间 O(mn)
 */

export class NumMatrix {
  private readonly prefix: number[][];

  constructor(matrix: number[][]) {
    const rows = matrix.length;
    const cols = rows === 0 ? 0 : matrix[0].length;
    this.prefix = Array.from({ length: rows + 1 }, () => Array.from({ length: cols + 1 }, () => 0));
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        this.prefix[row + 1][col + 1] =
          matrix[row][col] +
          this.prefix[row][col + 1] +
          this.prefix[row + 1][col] -
          this.prefix[row][col];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.prefix[row2 + 1][col2 + 1] -
      this.prefix[row1][col2 + 1] -
      this.prefix[row2 + 1][col1] +
      this.prefix[row1][col1]
    );
  }
}

const matrixSum = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log([
  matrixSum.sumRegion(2, 1, 4, 3),
  matrixSum.sumRegion(1, 1, 2, 2),
  matrixSum.sumRegion(1, 2, 2, 4),
]);
