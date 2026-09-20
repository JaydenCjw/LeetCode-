/**
 * 矩阵置零
 * 若矩阵某元素为 0，则将其所在行和列都置为 0。要求原地。
 *
 * 示例：
 * [[1,1,1],[1,0,1],[1,1,1]] => [[1,0,1],[0,0,0],[1,0,1]]
 *
 * 思路：用第一行/第一列做标记，再二次遍历清零。
 * 时间 O(m*n)，空间 O(1)
 */

export function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) firstRowZero = true;
  }
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) firstColZero = true;
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowZero) {
    for (let col = 0; col < cols; col++) matrix[0][col] = 0;
  }
  if (firstColZero) {
    for (let row = 0; row < rows; row++) matrix[row][0] = 0;
  }
}

const sample = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(sample);
console.log(sample);
