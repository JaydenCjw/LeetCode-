/**
 * 回旋镖的数量
 * 难度：★★★☆☆
 * 回旋镖是三元组 (i, j, k)，满足 i 到 j 与 i 到 k 的距离相等且 j != k。返回这样的三元组个数。
 *
 * 示例：points = [[0,0],[1,0],[2,0]] => 2
 *
 * 思路：枚举顶点，按距离计数，距离出现 c 次则可组成 c*(c-1) 个三元组。
 * 时间 O(n^2)，空间 O(n)
 */

export function numberOfBoomerangs(points: number[][]): number {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const distCount = new Map<number, number>();
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      const dist = dx * dx + dy * dy;
      distCount.set(dist, (distCount.get(dist) ?? 0) + 1);
    }
    for (const count of distCount.values()) {
      result += count * (count - 1);
    }
  }
  return result;
}

console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]));
