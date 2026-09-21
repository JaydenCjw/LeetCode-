/**
 * 对角线遍历
 * 难度：★★☆☆☆
 * 按对角线之字形遍历矩阵：先向右上，碰边后向左下，交替进行。
 *
 * 示例：mat=[[1,2,3],[4,5,6],[7,8,9]] => [1,2,4,7,5,3,6,8,9]
 *
 * 思路：按当前方向走，越界时根据方向改到下一条对角线的起点。右上角要先判断列边界。
 * 时间 O(mn)，空间 O(1) 额外（不含输出）
 */

export function findDiagonalOrder(mat: number[][]): number[] {
  const rows = mat.length;
  const cols = mat[0].length;
  const result: number[] = [];
  let row = 0;
  let col = 0;
  let up = true;
  while (result.length < rows * cols) {
    result.push(mat[row][col]);
    if (up) {
      if (col === cols - 1) {
        row += 1;
        up = false;
      } else if (row === 0) {
        col += 1;
        up = false;
      } else {
        row -= 1;
        col += 1;
      }
    } else if (row === rows - 1) {
      col += 1;
      up = true;
    } else if (col === 0) {
      row += 1;
      up = true;
    } else {
      row += 1;
      col -= 1;
    }
  }
  return result;
}

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
