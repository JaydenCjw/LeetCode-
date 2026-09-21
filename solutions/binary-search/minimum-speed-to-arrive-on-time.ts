/**
 * 准时到达的最低速度
 * 难度：★★★☆☆
 * 通勤列车按整数速度行驶。除最后一段外，每段耗时向上取整到小时。求在 hour 小时内到达的最小速度，不可能则 -1。
 *
 * 示例：dist = [1,3,2]，hour = 6 => 1；hour = 2.7 => 3；hour = 1.9 => -1
 *
 * 思路：前 n-1 段至少各 1 小时。二分速度，检查总时间是否不超过 hour。
 * 时间 O(n log M)，空间 O(1)
 */

export function minSpeedOnTime(dist: number[], hour: number): number {
  const n = dist.length;
  if (hour <= n - 1) {
    return -1;
  }
  const canArrive = (speed: number): boolean => {
    let time = 0;
    for (let i = 0; i < n - 1; i++) {
      time += Math.ceil(dist[i] / speed);
    }
    time += dist[n - 1] / speed;
    return time <= hour;
  };
  let lo = 1;
  let hi = 10_000_000;
  if (!canArrive(hi)) {
    return -1;
  }
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canArrive(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

console.log(minSpeedOnTime([1, 3, 2], 6));
console.log(minSpeedOnTime([1, 3, 2], 2.7));
console.log(minSpeedOnTime([1, 3, 2], 1.9));
