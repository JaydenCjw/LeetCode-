/**
 * 图片平滑器
 * 难度：★★☆☆☆
 * 灰度图每个格子变成自身与八邻域的平均值，向下取整。
 *
 * 示例：[[1,1,1],[1,0,1],[1,1,1]] => [[0,0,0],[0,0,0],[0,0,0]]
 *
 * 思路：对每个格子累加合法邻居，再整除个数。
 * 时间 O(mn)，空间 O(mn)
 */

export function imageSmoother(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const result = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      let sum = 0;
      let count = 0;
      for (let dr = -1; dr <= 1; dr += 1) {
        for (let dc = -1; dc <= 1; dc += 1) {
          const nr = row + dr;
          const nc = col + dc;
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
            continue;
          }
          sum += img[nr][nc];
          count += 1;
        }
      }
      result[row][col] = Math.floor(sum / count);
    }
  }
  return result;
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
