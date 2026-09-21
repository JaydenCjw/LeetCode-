/**
 * 二维网格迁移
 * 难度：★★☆☆☆
 * 把网格按行优先拉成一维，整体右移 k 位（末尾回到开头），再还原成同样形状。
 *
 * 示例：grid=[[1,2,3],[4,5,6],[7,8,9]], k=1 => [[9,1,2],[3,4,5],[6,7,8]]
 *
 * 思路：下标 (i*cols+j + k) 取模后写回新网格。k 先对元素个数取模。
 * 时间 O(mn)，空间 O(mn)
 */

export function shiftGrid(grid: number[][], k: number): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;
  const shift = k % total;
  const result = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  for (let index = 0; index < total; index += 1) {
    const next = (index + shift) % total;
    result[Math.floor(next / cols)][next % cols] = grid[Math.floor(index / cols)][index % cols];
  }
  return result;
}

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1,
  ),
);
