/**
 * 访问所有点的最小时间
 * 难度：★★☆☆☆
 * 从 points[0] 出发按顺序访问每个点。每秒可以沿八个方向移动一格。返回最少秒数。
 *
 * 示例：[[1,1],[3,4],[-1,0]] => 7
 *
 * 思路：相邻两点的时间是切比雪夫距离 max(|dx|, |dy|)。
 * 时间 O(n)，空间 O(1)
 */

export function minTimeToVisitAllPoints(points: number[][]): number {
  let time = 0;
  for (let i = 1; i < points.length; i += 1) {
    const dx = Math.abs(points[i][0] - points[i - 1][0]);
    const dy = Math.abs(points[i][1] - points[i - 1][1]);
    time += Math.max(dx, dy);
  }
  return time;
}

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
);
