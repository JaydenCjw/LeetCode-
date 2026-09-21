/**
 * 最小化加油站之间的最大距离
 * 难度：★★★★☆
 * 在数轴加油站之间再加 k 座，使相邻加油站最大距离最小。
 *
 * 示例：stations = [1,2,3,4,5,6,7,8,9,10], k = 9 => 0.5
 *
 * 思路：二分最大距离，统计每段需要新增的加油站数。
 * 时间 O(n log(区间/精度))，空间 O(1)
 */

export function minmaxGasDist(stations: number[], k: number): number {
  let left = 0;
  let right = 0;
  for (let i = 1; i < stations.length; i++) {
    right = Math.max(right, stations[i] - stations[i - 1]);
  }

  const needed = (distance: number): number => {
    let count = 0;
    for (let i = 1; i < stations.length; i++) {
      count += Math.ceil((stations[i] - stations[i - 1]) / distance) - 1;
    }
    return count;
  };

  while (right - left > 1e-6) {
    const mid = (left + right) / 2;
    if (needed(mid) <= k) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
}

console.log(minmaxGasDist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
