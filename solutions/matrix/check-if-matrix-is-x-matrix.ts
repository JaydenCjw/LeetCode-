/**
 * 判断矩阵是否是一个 X 矩阵
 * 难度：★★☆☆☆
 * n×n 矩阵是 X 矩阵，当且仅当两条对角线上都是非 0，其余位置都是 0。
 *
 * 示例：[[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]] => true
 *
 * 思路：主对角线或副对角线必须非 0，其他位置必须为 0。
 * 时间 O(n^2)，空间 O(1)
 */

export function checkXMatrix(grid: number[][]): boolean {
  const n = grid.length;
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const onDiagonal = row === col || row + col === n - 1;
      if (onDiagonal && grid[row][col] === 0) {
        return false;
      }
      if (!onDiagonal && grid[row][col] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ]),
);
