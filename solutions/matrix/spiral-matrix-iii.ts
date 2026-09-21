/**
 * 螺旋矩阵 III
 * 难度：★★☆☆☆
 * 从 (rStart, cStart) 出发，按东、南、西、北螺旋走，步长为 1,1,2,2,3,3...。只记录仍在网格内的坐标，直到覆盖每个格子。
 *
 * 示例：rows=1, cols=4, rStart=0, cStart=0 => [[0,0],[0,1],[0,2],[0,3]]
 *
 * 思路：按方向循环前进，越界的点丢掉。收满 rows*cols 个点即停止。
 * 时间 O((max(rows, cols))^2)，空间 O(rows*cols)
 */

export function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  const result: number[][] = [[rStart, cStart]];
  const dirs: Array<[number, number]> = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = rStart;
  let col = cStart;
  let dir = 0;
  let steps = 1;
  while (result.length < rows * cols) {
    for (let turn = 0; turn < 2 && result.length < rows * cols; turn += 1) {
      for (let step = 0; step < steps && result.length < rows * cols; step += 1) {
        row += dirs[dir][0];
        col += dirs[dir][1];
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          result.push([row, col]);
        }
      }
      dir = (dir + 1) % 4;
    }
    steps += 1;
  }
  return result;
}

console.log(spiralMatrixIII(1, 4, 0, 0));
