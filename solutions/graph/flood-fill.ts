/**
 * 图像渲染
 * 难度：★☆☆☆☆
 * 从 (sr, sc) 开始，把与起点连通且颜色相同的像素改成新颜色。
 *
 * 思路：DFS 四方向染色。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const start = image[sr][sc];
  if (start === color) {
    return image;
  }
  const rows = image.length;
  const cols = image[0].length;

  const dfs = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || image[row][col] !== start) {
      return;
    }
    image[row][col] = color;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(sr, sc);
  return image;
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
