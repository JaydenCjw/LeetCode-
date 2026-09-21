/**
 * 距离顺序排列矩阵单元格
 * 难度：★★☆☆☆
 * 返回 rows×cols 网格中所有单元格坐标，按到 (rCenter, cCenter) 的曼哈顿距离升序；距离相同则行号更小者在前，行号相同则列号更小者在前。
 *
 * 示例：rows=1, cols=2, rCenter=0, cCenter=0 => [[0,0],[0,1]]
 *
 * 思路：收集全部坐标后按距离、行、列排序。
 * 时间 O(mn log(mn))，空间 O(mn)
 */

export function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const cells: number[][] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      cells.push([row, col]);
    }
  }
  cells.sort((a, b) => {
    const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
    const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
    if (distA !== distB) {
      return distA - distB;
    }
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  return cells;
}

console.log(allCellsDistOrder(1, 2, 0, 0));
