/**
 * 01 矩阵
 * 难度：★★★☆☆
 * 矩阵元素为 0 或 1，返回每个格子到最近 0 的距离。
 *
 * 思路：多源 BFS，所有 0 同时入队。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  const dist = Array.from({ length: rows }, () => new Array<number>(cols).fill(Infinity));
  const queue: Array<[number, number]> = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        dist[row][col] = 0;
        queue.push([row, col]);
      }
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let head = 0;
  while (head < queue.length) {
    const [row, col] = queue[head++];
    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols) {
        continue;
      }
      if (dist[nextRow][nextCol] > dist[row][col] + 1) {
        dist[nextRow][nextCol] = dist[row][col] + 1;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  return dist;
}

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));
