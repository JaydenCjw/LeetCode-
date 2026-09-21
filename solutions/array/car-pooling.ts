/**
 * 拼车
 * 难度：★★★☆☆
 * trips[i] = [乘客数, 上车点, 下车点]。判断容量为 capacity 的车能否完成所有行程。
 *
 * 示例：trips = [[2,1,5],[3,3,7]], capacity = 4 => false
 *
 * 思路：差分数组统计每个站点的人数变化，前缀和超过容量则失败。
 * 时间 O(n + L)，空间 O(L)，L 为站点上限 1000
 */

export function carPooling(trips: number[][], capacity: number): boolean {
  const delta = new Array<number>(1001).fill(0);
  for (const trip of trips) {
    const passengers = trip[0];
    const from = trip[1];
    const to = trip[2];
    delta[from] += passengers;
    delta[to] -= passengers;
  }
  let current = 0;
  for (const change of delta) {
    current += change;
    if (current > capacity) {
      return false;
    }
  }
  return true;
}

console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));
