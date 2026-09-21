/**
 * 统计子岛屿
 * 难度：★★★☆☆
 * grid2 中的一座岛，若其每个陆地格在 grid1 中也是陆地，则它是子岛屿。
 *
 * 示例：grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]
 * grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]] => 3
 *
 * 思路：遍历 grid2 的每个岛屿，淹没时检查对应格在 grid1 是否全为陆地。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const rows = grid2.length;
  const cols = grid2[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const sink = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid2[row][col] !== 1) {
      return true;
    }
    grid2[row][col] = 0;
    let valid = grid1[row][col] === 1;
    for (const [dr, dc] of dirs) {
      if (!sink(row + dr, col + dc)) {
        valid = false;
      }
    }
    return valid;
  };

  let count = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid2[row][col] === 1 && sink(row, col)) {
        count++;
      }
    }
  }
  return count;
}

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ],
  ),
);
