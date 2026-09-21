/**
 * 二进制矩阵中的最短路径
 * 难度：★★★☆☆
 * n x n 网格，0 可走、1 阻塞，每次可走八个方向，求左上到右下的最短路径长度。不通返回 -1。
 *
 * 思路：BFS。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }
  const queue: Array<[number, number, number]> = [[0, 0, 1]];
  grid[0][0] = 1;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  let head = 0;

  while (head < queue.length) {
    const [row, col, steps] = queue[head++];
    if (row === n - 1 && col === n - 1) {
      return steps;
    }
    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= n || grid[nextRow][nextCol] !== 0) {
        continue;
      }
      grid[nextRow][nextCol] = 1;
      queue.push([nextRow, nextCol, steps + 1]);
    }
  }

  return -1;
}

console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]]));
