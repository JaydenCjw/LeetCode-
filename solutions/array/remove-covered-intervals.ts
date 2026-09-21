/**
 * 删除被覆盖区间
 * 难度：★★★☆☆
 * 若区间 a 完全覆盖区间 b，则删掉 b。返回删除后剩余区间个数。
 *
 * 示例：intervals = [[1,4],[3,6],[2,8]] => 2
 *
 * 思路：按起点升序、终点降序排序，终点没有超出当前覆盖终点的区间被删掉。
 * 时间 O(n log n)，空间 O(1)（不计排序栈）
 */

export function removeCoveredIntervals(intervals: number[][]): number {
  intervals.sort((left, right) => left[0] - right[0] || right[1] - left[1]);
  let remaining = 0;
  let end = 0;
  for (const interval of intervals) {
    if (interval[1] > end) {
      remaining++;
      end = interval[1];
    }
  }
  return remaining;
}

console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]));
