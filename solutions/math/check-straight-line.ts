/**
 * 缀点成线
 * 难度：★☆☆☆☆
 * 判断一组点是否都在同一条直线上。至少两个点。
 *
 * 示例：[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] => true
 *
 * 思路：以前两点为基准向量，其余点与它的叉积都为 0。
 * 时间 O(n)，空间 O(1)
 */

export function checkStraightLine(coordinates: number[][]): boolean {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const dx = x1 - x0;
  const dy = y1 - y0;
  for (let i = 2; i < coordinates.length; i += 1) {
    const x = coordinates[i][0];
    const y = coordinates[i][1];
    if (dx * (y - y0) !== dy * (x - x0)) {
      return false;
    }
  }
  return true;
}

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ]),
);
