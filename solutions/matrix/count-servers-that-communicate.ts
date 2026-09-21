/**
 * 统计参与通信的服务器
 * 难度：★★☆☆☆
 * 网格中 1 表示服务器。同一行或同一列有另一台服务器时，它就能通信。返回能通信的服务器数量。
 *
 * 示例：[[1,0],[0,1]] => 0；[[1,0],[1,1]] => 3
 *
 * 思路：先统计每行、每列的服务器数，再数所在行或列数量大于 1 的服务器。
 * 时间 O(mn)，空间 O(m+n)
 */

export function countServers(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const rowCount = Array.from({ length: rows }, () => 0);
  const colCount = Array.from({ length: cols }, () => 0);
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) {
        rowCount[row] += 1;
        colCount[col] += 1;
      }
    }
  }
  let servers = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1 && (rowCount[row] > 1 || colCount[col] > 1)) {
        servers += 1;
      }
    }
  }
  return servers;
}

console.log([
  countServers([
    [1, 0],
    [0, 1],
  ]),
  countServers([
    [1, 0],
    [1, 1],
  ]),
]);
