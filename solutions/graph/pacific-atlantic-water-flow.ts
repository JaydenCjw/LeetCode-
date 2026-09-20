/**
 * 太平洋大西洋水流问题
 * 矩阵 heights 表示海拔。雨水可流向四邻且高度非增。
 * 返回既能流到太平洋（左/上边界）又能流到大西洋（右/下边界）的坐标。
 *
 * 思路：从两片海洋边界分别逆向 DFS，取交集。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));

  const dfs = (row: number, col: number, ocean: boolean[][], prevHeight: number): void => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      ocean[row][col] ||
      heights[row][col] < prevHeight
    ) {
      return;
    }
    ocean[row][col] = true;
    const height = heights[row][col];
    dfs(row + 1, col, ocean, height);
    dfs(row - 1, col, ocean, height);
    dfs(row, col + 1, ocean, height);
    dfs(row, col - 1, ocean, height);
  };

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacific, heights[row][0]);
    dfs(row, cols - 1, atlantic, heights[row][cols - 1]);
  }
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacific, heights[0][col]);
    dfs(rows - 1, col, atlantic, heights[rows - 1][col]);
  }

  const result: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }
  return result;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
);
